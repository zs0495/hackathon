
from flask import Flask, request, render_template, redirect, url_for, session, jsonify
import pymysql 
import pymysql.cursors
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import date
import logging


logging.basicConfig(level=logging.INFO)


app = Flask(__name__)


app.secret_key = "your_secret_key_here_1234"   


def get_db():
    """MySQL 데이터베이스 연결을 설정하고 DictCursor를 반환"""
    try:
        db = pymysql.connect(
            host='localhost', 
            port=3306,
            user='root', 
            password='Aa0205!!?',  
            db='welfaredb', 
            charset='utf8mb4', 
            autocommit=False,
            cursorclass=pymysql.cursors.DictCursor
        )
        return db
    except Exception as e:
        logging.error(f"데이터베이스 연결 실패: {e}")
        return None


# 로그인 폼
@app.route('/login', methods=['GET'])
def login_form():
    message = request.args.get('message', '아이디와 비밀번호를 입력해주세요.')
    return render_template("login.html", message=message)


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    if not username or not password:
        return redirect(url_for('login_form', message="아이디와 비밀번호를 입력하세요."))
        
    db = get_db()
    if not db:
        return redirect(url_for('login_form', message="시스템 오류: DB 연결 실패"))

    cur = db.cursor()
    
    try:
        sql = "SELECT user_no, username, password FROM personal_info WHERE username=%s"
        cur.execute(sql, (username,))
        user = cur.fetchone()

    
        if user and check_password_hash(user['password'], password):
            
           
            session['logged_in'] = True
            session['username'] = username
            
            session['user_no'] = user['user_no']

            return redirect(url_for('index', message=f"{username}님, 로그인 성공!"))
        else:
            return redirect(url_for('login_form', message="로그인 실패 - 아이디 또는 비밀번호를 확인하세요."))

    except Exception as e:
        logging.error(f"로그인 처리 중 오류 발생: {e}")
        return redirect(url_for('login_form', message="로그인 처리 중 시스템 오류가 발생했습니다."))
    finally:
        db.close()

# 회원가입 폼
@app.route('/signup', methods=['GET'])
def signup_form():
    message = request.args.get('message', '모든 정보를 입력해주세요.')
    current_year = date.today().year
    return render_template('signup.html', message=message, today_year=current_year)
    
# 회원가입 처리
@app.route('/signup', methods=['POST'])
def signup():
    username = request.form.get('username')
    password = request.form.get('password')
    name = request.form.get('name')
    birth_year = request.form.get('birth_year')
    birth_month = request.form.get('birth_month')
    phone = request.form.get('phone')
    city = request.form.get('city')
    district = request.form.get('district')
    situation = request.form.get('situation')

    # 1. 필수 항목 체크
    if not all([username, password, name, birth_year, birth_month, city, district]):
        return redirect(url_for('signup_form', message="필수 항목을 모두 입력해주세요."))

    if not password or len(password) < 8:
        return redirect(url_for('signup_form', message="비밀번호는 최소 8자 이상이어야 합니다."))

    # 생년월검사
    try:
        birth_year = int(birth_year)
        birth_month = int(birth_month)
        
        if birth_year < 1900 or birth_year > date.today().year:
            return redirect(url_for('signup_form', message="올바른 생년을 입력해주세요."))
        
        if birth_month < 1 or birth_month > 12:
            return redirect(url_for('signup_form', message="생월은 1-12 사이여야 합니다."))
    except ValueError:
        return redirect(url_for('signup_form', message="생년월을 숫자로 입력해주세요."))

    hashed_password = generate_password_hash(password)
    
    db = get_db()
    if not db:
        return redirect(url_for('signup_form', message="시스템 오류: DB 연결 실패."))

    cur = db.cursor()

    try:
      
        cur.execute("SELECT username FROM personal_info WHERE username=%s", (username,))
        if cur.fetchone():
            return redirect(url_for('signup_form', message="이미 존재하는 아이디입니다."))

        # 저장
        sql = """
        INSERT INTO personal_info 
        (username, password, name, birth_year, birth_month, phone, city, district, situation) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        cur.execute(sql, (
            username, hashed_password, name, birth_year,
            birth_month, phone, city, district, situation
        ))
        db.commit()
        
        if cur.rowcount == 1:
            return redirect(url_for('login_form', message="회원가입 성공! 이제 로그인 해주세요."))    
        
        else:
            logging.error("회원가입 INSERT 실패: rowcount=0")
            return redirect(url_for('signup_form', message="회원가입 실패: DB에 저장되지 않았습니다."))

    except Exception as e:
        logging.exception("회원가입 처리 중 예외 발생")
        return redirect(url_for('signup_form', message="회원가입 처리 중 시스템 오류가 발생했습니다."))
    finally:
            db.close()


# 메인 페이지

@app.route('/')
def index():
    message = request.args.get('message', None)
    return render_template('index.html', message=message)


@app.route('/service')
def service_page():
    return render_template('service.html')

@app.route('/team')
def team_page():
    return render_template('team.html')

@app.route('/public')
def public_page():
    return render_template('public.html')

@app.route('/private')
def private_page():
    return render_template('private.html')

@app.route('/library')
def library_page():
    return render_template('library.html')

@app.route('/guide')
def guide_page():
    return render_template('guide.html')

@app.route('/faq')
def faq_page():
    return render_template('faq.html')

@app.route('/gong')
def gong_benefits_page():
    return render_template('gong.html')

@app.route('/min')
def min_benefits_page():
    return render_template('min.html')


# API - 로그인 상태 확인

@app.route('/api/check-login')
def check_login():
    return jsonify({
        'isLoggedIn': session.get('logged_in', False),
        'username': session.get('username', None)
    })

# 로그아웃
@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'success': True})



# 마이페이지 (로그인 필요)

@app.route('/mypage')
def mypage():
    if not session.get('logged_in'):
        return redirect(url_for('login_form', message='로그인이 필요한 서비스입니다.'))
    
    username = session.get('username')
    
    db = get_db()
    if not db:
        return render_template('mypage.html', username=username, user_info={}, favorites=[])

    try:
        cur = db.cursor()

        # 사용자 기본 정보 읽기
        sql = """
        SELECT name, birth_year, birth_month, city, district, situation 
        FROM personal_info 
        WHERE username=%s
        """
        cur.execute(sql, (username,))
        user_info = cur.fetchone()

        favorites = []  

        return render_template('mypage.html', 
            username=username, 
            user_info=user_info or {}, 
            favorites=favorites)

    except Exception as e:
        logging.error(f"마이페이지 오류: {e}")
        return render_template('mypage.html', username=username, user_info={}, favorites=[])
    finally:
        if db:
            db.close()

@app.route('/edit-profile')
def edit_profile():
    if not session.get('logged_in'):
        return redirect(url_for('login_form', message='로그인이 필요한 서비스입니다.'))
    return "정보 수정 페이지 (준비중)"


if __name__ == '__main__':
    app.run(debug=True)

