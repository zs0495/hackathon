from flask import Flask, request, render_template_string, redirect
import pymysql

app = Flask(__name__)

# MySQL 연결 함수
def get_db():
    return pymysql.connect(host='localhost', user='root', password='PASSWORD', db='welfaredb', charset='utf8', autocommit=True)



# 로그인

@app.route('/login', methods=['GET'])
def login_form():
    return render_template_string('''
    <h2>로그인</h2>
    <form method="POST" action="/login">
        <label>아이디:</label><input type="text" name="username" required><br>
        <label>비밀번호:</label><input type="password" name="password" required><br>
        <button type="submit">로그인</button>
    </form>
    ''')

# 로그인처리
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    db = get_db()
    cur = db.cursor()
    #사용자 로그인 정보 가져오기
    sql = "SELECT * FROM personal_info WHERE id=%s AND password=%s" 
    cur.execute(sql, (username, password))
    user = cur.fetchone()
    if user:
        return "로그인 성공!"
    else:
        return "로그인 실패 - 아이디 또는 비밀번호를 확인하세요."





# 회원가입

#폼 라우트
@app.route('/signup', methods=['GET'])
def signup_form():
    return render_template_string('''
    <h2>회원가입</h2>
    <form method="POST" action="/signup">
        <label>아이디:</label><input type="text" name="username" required><br>
        <label>비밀번호:</label><input type="password" name="password" required><br>
        <label>이름:</label><input type="text" name="name" required><br>
        <label>생일(YYYY-MM-DD):</label><input type="date" name="birth" required><br>
        <label>전화번호:</label><input type="text" name="phone" required><br>
        <label>도시:</label><input type="text" name="city" required><br>
        <label>구/군:</label><input type="text" name="district" required><br>
        <button type="submit">회원가입</button>
    </form>
    ''')

# 회원가입 처리 라우트
@app.route('/signup', methods=['POST'])
def signup():
    #user_no (자동증가)
    username = request.form['id']
    password = request.form['password']
    name = request.form['name']
    #date 형식으로 저장
    birthday = request.form['birth']
    #age (자동계산)
    phone_number = request.form['phone']
    city = request.form['city_id']
    district = request.form['district_id']

    db = get_db()
    cur = db.cursor()



    # 중복 체크
    cur.execute("SELECT * FROM personal_info WHERE id=%s", (id,))
    if cur.fetchone():
        return "이미 존재하는 아이디입니다."



    #personal_info table에 삽임
    sql = """
    INSERT INTO personal_info 
    (id, password, name, birth, phone_number, city_id, district_id) 
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cur.execute(sql, (username, password, name, birth, phone_number, city, district))
    return "회원가입 성공!"






if __name__ == '__main__':
    app.run(debug=True)



