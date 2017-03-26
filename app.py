import os
from flask import Flask, render_template,jsonify,request, redirect,url_for, session
import sys
import json

app = Flask(__name__)


@app.route("/login", methods=["POST"])
def login():
	name = request.form['username']
	session['name'] = name
	password = request.form['password']
	if request.form['password'] == "password" and request.form['username'] == "username":
		session['logged_in'] = True
	else:
		flash('wrong password!')
	return admin()


@app.route("/admin")
def admin():
	if not session.get('logged_in'):
		return render_template("login.html")
	else:
		return render_template("admin.html")

@app.route("/")
def home():
	return render_template('index.html')

@app.route("/about")
def about():
	return render_template('about.html')


@app.route("/apply")
def apply():
	return render_template('apply.html')

@app.route("/alum")
def companies():
	return render_template('companies.html')

@app.route("/events")
def events():
	return render_template('events.html')



if __name__ == "__main__":
	app.secret_key = os.urandom(12)
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)