from flask import Flask, render_template, request
import json

app = Flask(__name__)

@app.route('/hello')
@app.route('/hi')
def helloAndHi():

	print(app.url_map)

	for rule in app.url_map.iter_rules():
		print(rule.endpoint, rule.rule)

	return '你好啊'

@app.route('/')
@app.route('/index')
@app.route('/home')
def home():
    rules_ierator = app.url_map.iter_rules()
    return json.dumps({rule.endpoint: rule.rule for rule in rules_ierator})

# @app.route('/login', methods=['GET'])
# def login_page():

# 	print(request.method, type(request.method))
# 	return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():

	if request.method == 'GET':
		return render_template('index.html')

	elif request.method == 'POST':
		
		username = request.form.get('username')
		password = request.form.get('password')

		print(username, password)

		return '<h1>恭喜%s，登录成功</h1>' % username

app.run(host='127.0.0.1', port=8001, debug=True)
