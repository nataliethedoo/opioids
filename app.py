import os
from flask import Flask, render_template,jsonify,request, redirect,url_for
import sys
import json

app = Flask(__name__)



@app.route("/")
def blah():
	return render_template('index.html')



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)