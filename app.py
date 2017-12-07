import os
from flask import Flask, render_template,jsonify,request, redirect,url_for, session, json
import sys
import json
from service import painscore

app = Flask(__name__)

@app.route("/")
def home():
	return render_template('index.html')

@app.route("/getData", methods=["GET"])
def getData():
	data = request.args
	if len(data) < 7 :
		return render_template('refill.html')
	fname = data['first-name']
	lname = data['last-name']
	morphine = int(data['morphine'])
#	comorb = int(data['comorbidities'])
#	proc = int(data['procedure'])
	sex = int(data['sex'])
	age = int(data['age'])
	race = int(data['race'])
	income = int(data['income'])
	ins = int(data['insurance'])
	zip_code = int(data['zip'])
	#output = multiply(input)
	pain = painscore(morphine)
	lst = getInfo(sex,age,race,income,ins)
	#print request.form.get
	return render_template('seesaw.html', f=fname, l=lname, number=pain, m=morphine, z=zip_code, s=lst[0], a=lst[1], r=lst[2], inc=lst[3], insurance=lst[4])
def getInfo(sex, age, race, income, ins):
	sex_dict = {1: "Male", 2: "Female"}
	age_dict = {2:"12-14", 3:"15-17", 4:"18-20",5:"21-24",6:"25-29",7:"30-34",8:"35-39",9:"40-44",10:"45-49",11:"50-54",12:"55 and above"}
	race_dict = {3:"Hispanic",4:"Black",5:"White",0:"Other"}
	income_dict = {1:"Poor/Negative Income", 2:"Almost poor",3:"Low",4:"Middle",5:"High"}
	ins_dict = {1:"Private",2:"Medicaid",3:"Medicare",4:"None",-9:"Unknown"}
	return [sex_dict[sex], age_dict[age], race_dict[race], income_dict[income], ins_dict[ins]]


@app.route("/getLogin", methods=["POST"])
def login():
	name = request.form['username']
	session['name'] = name
	password = request.form['password']
	if request.form['password'] == "ladeeda" and request.form['username'] == "hello":
		session['logged_in'] = True
	else:
		return render_template('error.html')
	return render_template('patient.html')

@app.route("/selectPatient")
def selectPatient():
	return render_template('login.html')

@app.route("/admin")
def admin():
	if not session.get('logged_in'):
		return render_template("login.html")
	else:
		return render_template("admin.html")

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
	app.run(debug=True)
	#app.run(host='0.0.0.0', port=port)