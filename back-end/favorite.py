#찜하기 찜하기 취소하기 코드
from flask import Flask, render_template, session, redirect, url_for
import pymysql

app = Flask(__name__)
app.secret_key = "SECRET_KEY"

#MYSQL 연결함수
def get_db():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='PASSWORD',
        db='welfaredb',
        charset='utf8mb4',
        autocommit=True
    )

#마이페이지 라우트
@app.route('/mypage')
def mypage():
    if 'user_no' not in session:
        return redirect('/login')

    user_id = session['user_no']
    db = get_db()
    try:
        cur = db.cursor(pymysql.cursors.DictCursor)

        #전체 혜택 목록
        cur.execute("SELECT s.site_name, b.title AS benefit_title
            FROM benefits b
            JOIN sites s ON s.site_id = b.site_id
            ORDER BY b.benefit_no ")
        benefits = cur.fetchall()
        
       #찜한 항목
    user_id = session['user_no']
    db = get_db()
    try:
        cur = db.cursor(pymysql.cursors.DictCursor)

        cur.execute("""
        SELECT fb.user_no, s.site_name, b.title AS benefit_title
            FROM favorite_benefit fb
            JOIN sites s ON fb.site_id = s.site_id
            JOIN benefits b ON fb.benefit_no = b.benefit_no
            WHERE fb.user_no = %s
            ORDER BY fb.benefit_no
            """,
            (user_no))
        favorites = cur.fetchall()
       
    finally:
        db.close()

    return render_template("mypage.html", favorites=favorites)



#찜하기 라우트
@app.route('/like/<int:benefit_no>')
def like(benefit_no):
    if 'user_no' not in session:
        return redirect({'error': 'Not logged in'}), 401
        
    user_no = session['user_no']
    db = get_db()

    
    try:
        cur = db.cursor()
    
    # site_id 조회
     cur.execute("SELECT site_id FROM benefits WHERE benefit_no=%s", (benefit_no,))
     result = cur.fetchone()
        if not result:
            return jsonify({'error': 'Benefit not found'}), 404
            
        site_id = result[0]

        # 중복 체크
        cur.execute("""
            SELECT * FROM favorite_benefit
            WHERE user_no=%s AND benefit_no=%s
            """, (user_no, benefit_no))
            
        if not cur.fetchone():
            cur.execute("""
                    INSERT INTO favorite_benefit(user_no, benefit_no, site_id)
                    VALUES(%s, %s, %s)
                """, (user_no, benefit_no, site_id))

        return jsonify({'success': True})

    finally:
        db.close()

#찜하기 취소 라우트
@app.route('/unlike/<int:benefit_no>')
def unlike(benefit_no):
    if 'user_no' not in session:
        return jsonify({'error': 'Not logged in'}), 401

    user_no = session['user_no']
    db = get_db()
    
    try:
        cur = db.cursor()
        
        #이미 찜했으면 찜하기 취소
        cur.execute("""
            DELETE FROM favorite_benefit 
            WHERE user_no=%s AND benefit_no=%s
            """, (user_no, benefit_no))

     return jsonify({'success': True})

    finally:
        db.close()

if __name__ == '__main__':
    app.run(debug=True)
