from flask import Flask, render_template

app = Flask(__name__)

app.debug = True

@app.route('/<name>')
def index(name):

	return render_template(name + '.html')

if __name__ == '__main__':

	app.run(host='127.0.0.1', port='8089')
