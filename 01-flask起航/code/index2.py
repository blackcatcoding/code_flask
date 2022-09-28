from flask import Flask, render_template

app = Flask(__name__)

app.debug = True

@app.route('/index')
def index():

	return '<h1>hello cat.</h1>'

@app.route('/game')
def game():

	return render_template('game.html')

@app.route('/quiz')
def quiz():

	return render_template('quiz.html')

if __name__ == '__main__':

	app.run(host='127.0.0.1', port='8089')
