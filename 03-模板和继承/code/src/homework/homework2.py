from flask import Flask,render_template

web = Flask(__name__)
web.debug=True

# info = '【游戏】随时开始工作细胞分娩~'
info = None

@web.route('/cells')
def cells():
  return render_template('cells.html',   )

web.run(host='127.0.0.1',port=5000)
