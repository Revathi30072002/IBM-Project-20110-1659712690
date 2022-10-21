from flask import Flask,render_template,redirect,request,url_for,session,flash
import sqlite3
food=Flask(__name__)
food.secret_key="123"



con=sqlite3.connect("detail.db")
con.execute("CREATE TABLE IF NOT EXISTS data(pid INTEGER PRIMARY KEY, name TEXT, d_o_b INTEGER,age INTEGER,email TEXT,password INTEGER)")

con.close()

@food.route("/")
def signup():
    return render_template("signup.html")
@food.route("/submitting",methods=['POST','GET'])
def submit():
   if request.method=="POST":
        try:
            name=request.form["name"]
            d_o_b=request.form["d_o_b"]
            age=request.form["age"]
            email=request.form["email"]
            password=request.form["password"]
            con=sqlite3.connect("detail.db")
            
            cur=con.cursor()
            con.execute("INSERT INTO data(name,d_o_b,age,email,password)VALUES(?,?,?,?,?)",(name,d_o_b,age,email,password))
            con.commit()
            flash("registered successfully","primary")
        except:
           flash("Error in insertion","danger")
        
        finally:
            return redirect(url_for("insert"))
            con.close()
   return render_template("signup.html")   
@food.route("/login")
def login():
    return render_template("login.html")
@food.route("/verify", methods=["GET","POST"])
def insert():
    if request.method=='POST':
        name=request.form['name']
        password=request.form['password']
        con=sqlite3.connect("detail.db")
        con.row_factory=sqlite3.Row
        cur=con.cursor()
        cur.execute("SELECT * FROM data where name=? and password=?",(name,password))
        data=cur.fetchone()
        if data:
            session["name"]=data["name"]
            return render_template("home.html")
        else:
            flash("Username and Password Mismatch","danger")
    return render_template("login.html")
@food.route("/home")
def home(): 
    return render_template("home.html")  
    




if __name__=='__main__':
    food.run(debug=True)

