from flask import Flask,render_template


app = Flask(__name__)

app.debug = True

@app.route('/acre',methods=['GET'])
def acre():
	return render_template('test_acre.html')


@app.route('/startrek',methods=['GET'])
def startrek():
	return render_template('test_startrek.html')


app.run(host='127.0.0.1',port=8001)
