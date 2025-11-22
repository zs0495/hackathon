from flask import Flask, render_template, request, session, redirect, jsonify
import pymysql
import re

app = Flask(__name__)
app.secret_key = "SECRET_KEY"

# MySQL 연결 함수
def get_db():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='PASSWORD',
        db='welfaredb',
        charset='utf8mb4',
        autocommit=True
    )

# 나이 구간 
AGE_RANGES = [
    (0, 6, "아동"),
    (7, 18, "학생(청소년)"),
    (19, 45, "청년"),
    (46, 59, "중년"),
    (60, 100, "노인")
]

# 키워드 매핑 
SITUATION_KEYWORDS = {
    '국가유공자': ['독립유공자', '유공자', '국가', '독립', '보훈'],
    '아동': ['보육', '아이', '아기', '자녀', '어린', '양육', '딸', '아들'],
    '자영업': ['장사', '기업', '단체'],
    '학생(청소년)': ['중학생', '중학교', '고등학교', '고등학생', '초등학생' , '초등학교', '자녀', '아이', '딸', '아들'],
    '청년': ['성인'],
    '질병': ['병', '병원', '치료', '의료'],
    '한부모가정': ['한부모', '한 부모', '이혼','3분위', '2분위', '1분위', '3 분위', '2 분위', '1 분위'],
    '취업': ['취직', '일', '자격증', '회사', '입사', '교육', '배움', '배우', '수업', '실직'],
    '장학금': ['장학금', '등록금 지원', '교육비', '교육 지원', '금전', '돈', '등록금', '학비'],
    '차상위/저소득': ['기초생활', '차상위', '저소득', '3분위', '2분위', '1분위', '3 분위', '2 분위', '1 분위'],
    '장애인': ['장애'],
    '교육': ['학교', '배우', '공부', '수업'],
    '임산부': ['출산', '임신', '임산', '아이를 낳'],
    '금융': ['대출', '통장', '자금', '금전', '월세', '전세', '생활비'],
    '노인': ['어르신', '할머니', '할아버지'],
    '거주': ['주거', '집', '전세', '월세', '임대', '주택'],
    '(신혼)부부': ['부부', '신혼', '가족', '결혼', '혼인'],
}

# 나이 추출
def extract_age_range(text):
    matches = re.findall(r'(\d{1,2})\s*[\~\-]\s*(\d{1,2})\s*(?:세|살)', text)
    if matches:
        return tuple(int(x) for x in matches[0])

    match = re.search(r'(\d{1,2})\s*(?:세|살)', text)
    if match:
        age = int(match.group(1))
        return (age, age)
    return None

def get_age_group_label(age):
    if age is None:
        return None
    for min_age, max_age, label in AGE_RANGES:
        if min_age <= age <= max_age:
            return label
    return None

# 상황 텍스트에서 키워드 추출
def extract_keywords_from_situation(text):
    keywords = set()
    text_lower = text.lower()

    # 기본 키워드 매칭 (값 리스트는 한글이므로 대소문자 구분 필요 없음)
    for key, values in SITUATION_KEYWORDS.items():
        if key in text:
            keywords.update(values)

    # 나이 검색
    age_range = extract_age_range(text)
    if age_range:
        mid = (age_range[0] + age_range[1]) // 2
        label = get_age_group_label(mid)
        if label:
            keywords.add(label)

    return list(keywords)

# 공공복지 매칭 페이지 라우팅
@app.route('/gong')
def gong():
    return render_template('gong.html')

# 복지 매칭 API
@app.route('/match_welfare', methods=['POST'])
def match_welfare():
    if 'user_no' not in session:
        # 로그인 안 된 상태
        return jsonify({'error': 'Not logged in'}), 401

    try:
        data = request.get_json()

        user_name = data.get('username', '')
        birth_year = data.get('birth_year', '')  # 키 이름 통일
        birth_month = data.get('birth_month', '')
        city = data.get('city', '')
        district = data.get('district', '')
        selected_keywords = data.get('keywords', [])
        situation_text = data.get('situation', '')
        welfare_type = data.get('type', 'PUBLIC')

        # 나이 계산
        age = None
        if birth_year:
            age = 2025 - int(birth_year)

        # 나이 기반 연령 키워드
        age_group_keywords = []
        if age:
            group = get_age_group_label(age)
            if group:
                age_group_keywords.append(group)

        # 상황 텍스트 키워드 추출
        situation_keywords = extract_keywords_from_situation(situation_text)

        # 모든 키워드 합치기
        all_keywords = list(set(selected_keywords + age_group_keywords + situation_keywords))

        # DB 조회
        db = get_db()
        cur = db.cursor(pymysql.cursors.DictCursor)

        params = []
        query = """
            SELECT DISTINCT 
                b.benefit_no,
                b.title AS benefit_title,
                b.description,
                b.eligibility,
                b.appl_method,
                b.required_doc,
                b.ben_url,
                s.site_name,
                b.is_nationwide
            FROM benefits b
            JOIN sites s ON b.site_id = s.site_id
            LEFT JOIN ben_address ba ON b.benefit_no = ba.benefit_no
            LEFT JOIN city c ON ba.city_id = c.city_id
            LEFT JOIN ben_keyword bk ON b.benefit_no = bk.benefit_no
            LEFT JOIN keyword k ON bk.keyword_id = k.keyword_id
            WHERE b.site_id BETWEEN 8 AND 12
        """

        # 지역 조건
        if city:
            query += " AND (c.city_name = %s OR b.is_nationwide = TRUE)"
            params.append(city)

        # 키워드 조건
        if all_keywords:
            placeholders = ",".join(["%s"] * len(all_keywords))
            query += f" AND k.keyword_content IN ({placeholders})"
            params.extend(all_keywords)

        query += " ORDER BY b.benefit_no LIMIT 20"

        cur.execute(query, params)
        results = cur.fetchall()

        # 사용자가 찜한 목록 조회
        user_no = session['user_no']
        cur.execute("SELECT benefit_no FROM favorite_benefit WHERE user_no = %s", (user_no,))
        liked = {row['benefit_no'] for row in cur.fetchall()}

        # 결과 정리
        matched = []
        for row in results:
            matched.append({
                'benefit_no': row['benefit_no'],
                'site_name': row['site_name'],
                'benefit_title': row['benefit_title'],
                'description': row['description'],
                'eligibility': row['eligibility'],
                'appl_method': row['appl_method'],
                'required_documents': row['required_doc'].split(',') if row['required_doc'] else [],
                'link': row['ben_url'],
                'is_nationwide': row['is_nationwide'],
                'is_liked': row['benefit_no'] in liked
            })

        db.close()

        return jsonify({
            'success': True,
            'matched': len(matched) > 0,
            'welfare_type': welfare_type,
            'benefits': matched,
            'extracted_keywords': situation_keywords,
            'age_keywords': age_group_keywords,
            'all_keywords': all_keywords,
            'user_info': {
                'name': user_name,
                'age': age,
                'age_group': get_age_group_label(age) if age else None,
                'location': f"{city} {district}".strip()
            }
        })

    except Exception as e:
        print("Error:", e)
        # 사용자에게 명확한 오류 메시지 전달
        return jsonify({'error': '서버 내부 오류가 발생했습니다.'}), 500


# 사용자 정보 로딩 API
@app.route('/get_user_info', methods=['GET'])
def get_user_info():
    if 'user_no' not in session:
        return jsonify({'error': 'Not logged in'}), 401

    db = get_db()
    try:
        cur = db.cursor(pymysql.cursors.DictCursor)
        cur.execute("""
            SELECT name, birth_date, address, situation
            FROM users
            WHERE user_no = %s
        """, (session['user_no'],))

        user = cur.fetchone()

        if not user:
            return jsonify({'success': False}), 404

        # 생년월일 파싱
        birth_year = None
        birth_month = None
        if user['birth_date']:
            parts = user['birth_date'].split('년')
            if len(parts) > 0:
                birth_year = parts[0].strip()
            if len(parts) > 1:
                birth_month = parts[1].replace('월', '').strip()

        # 주소 분리
        city = ''
        district = ''
        if user['address']:
            parts = user['address'].split()
            if len(parts) > 0:
                city = parts[0]
            if len(parts) > 1:
                district = parts[1]

        return jsonify({
            'success': True,
            'name': user['name'],
            'birth_year': birth_year,
            'birth_month': birth_month,
            'city': city,
            'district': district,
            'situation': user['situation']
        })

    finally:
        db.close()


if __name__ == '__main__':
    app.run(debug=True)
