from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def baidu():
    return render_template('baidu.html')


@app.route('/search')
def search():
    # 在下方写你的代码：获取GET请求传递的数据

    return ''


app.run(host='127.0.0.1', port=8000)
