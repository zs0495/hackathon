from flask import Flask, render_template, request, session, jsonify
import pymysql
import re

app = Flask(__name__)
app.secret_key = "SECRET_KEY"

def get_db():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='PASSWORD',
        db='welfaredb',
        charset='utf8mb4',
        autocommit=True
    )

# (나이 구간, 키워드 매핑, 키워드 추출 함수 등 생략 - 이전과 동일)

@app.route('/gong', methods=['GET'])
def gong():
    return render_template('gong.html')

# 사용자 정보 불러오기 (situation 포함)
@app.route('/get_user_info', methods=['GET'])
def get_user_info():
    if 'user_no' not in session:
        return jsonify({'error': 'Not logged in'}), 401
    db = get_db()
    try:
        cur = db.cursor(pymysql.cursors.DictCursor)
        cur.execute("""
            SELECT name, birth_date, address, situation 
            FROM personal_info WHERE user_no = %s
        """, (session['user_no'],))
        user = cur.fetchone()
        if not user:
            return jsonify({'success': False}), 404

        # 파싱 작업 (생년월일, 주소) - 동일

        return jsonify({
            'success': True,
            'name': user['name'],
            'birth_year': birth_year,
            'birth_month': birth_month,
            'city': city,
            'district': district,
            'situation': user['situation'] or ''
        })
    finally:
        db.close()

# 복지 매칭 및 상황 업데이트
@app.route('/match_welfare', methods=['POST'])
def match_welfare():
    if 'user_no' not in session:
        return jsonify({'error': 'Not logged in'}), 401
    try:
        data = request.get_json()
        user_no = session['user_no']
        situation_text = data.get('situation', '')
        # 기타 사용자 정보들...

        # DB에 situation 업데이트
        db = get_db()
        cur = db.cursor()
        cur.execute("UPDATE users SET situation = %s WHERE user_no = %s", (situation, user_no))
        db.commit()

        # 이후 기존 키워드 추출 및 복지 매칭 로직 수행
        situation_keywords = extract_keywords_from_situation(situation_text)
        # ... 나이, 키워드 등 포함해서 SQL 조회 및 결과 조합 ...

        # 결과 JSON 응답
        return jsonify({
            'success': True,
            'benefits': matched_benefits,  # 매칭 데이터 리스트
            'extracted_keywords': situation_keywords,
            # 기타 정보...
        })

    except Exception as e:
        print("Error:", e)
        return jsonify({'error': '서버 내부 오류'}), 500

if __name__ == '__main__':
    app.run(debug=True)

