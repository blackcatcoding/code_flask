from flask import Flask 

app = Flask(__name__)

app.debug = True

@app.route('/index')
def index():

	return '<h1>hello cat.</h1>'

if __name__ == '__main__':

	app.run(host='127.0.0.1', port='8089')
