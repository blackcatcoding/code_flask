from flask import Flask,render_template,request
from datetime import timedelta

app = Flask(__name__)

app.debug = True
app.send_file_max_age_default = timedelta(seconds=1)

@app.route('/animation',methods=['GET'])
def active():
    return render_template('wm_animation.html')

@app.route('/news',methods=['GET'])
def chat():
    return render_template('wm_news.html')

app.run(host='127.0.0.1',port=8004)

