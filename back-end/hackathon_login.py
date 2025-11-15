from flask import Flask, request, render_template_string, redirect
import pymysql

app = Flask(__name__)

# MySQL 연결 함수
def get_db():
    return pymysql.connect(host='localhost', user='root', password='PASSWORD', db='welfaredb', charset='utf8', autocommit=True)

# 로그인 폼 라우트
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

# 로그인 처리 라우트
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

# 회원가입 폼 라우트
@app.route('/signup', methods=['GET'])
def signup_form():
    return render_template_string('''
    <h2>회원가입</h2>
    <form method="POST" action="/signup">
        <label>아이디:</label><input type="text" name="username" required><br>
        <label>비밀번호:</label><input type="password" name="password" required><br>
        <label>이메일:</label><input type="email" name="email" required><br>
        <button type="submit">회원가입</button>
    </form>
    ''')

# 회원가입 처리 라우트
@app.route('/signup', methods=['POST'])
def signup():
    username = request.form['id']
    password = request.form['password']
    name = request.form['name']
    #date 형식으로 저장
    birthday = request.form['birth']
    # string이 아니라 다른 형식으로 받으려면?
    address = request.form['address']
    phone_number = request.form['ph_no']
    db = get_db()
    cur = db.cursor()
    # 중복 체크
    cur.execute("SELECT * FROM personal_info WHERE id=%s", (username,))
    if cur.fetchone():
        return "이미 존재하는 아이디입니다."
    #personal_info table에 삽임
    sql = "INSERT INTO personal_info (id, password, name, birth, addr, ph_no) VALUES (%s, %s, %s, %s, %s, %d)" 
    cur.execute(sql, (id, password, name))
    return "회원가입 성공!"

if __name__ == '__main__':
    app.run(debug=True)
