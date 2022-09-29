from flask import Flask, render_template, request


app = Flask(__name__)
app.debug = True

@app.route('/', methods=['GET'])
def baidu():
    return render_template('baidu.html')


@app.route('/search', methods=['GET'])
def search():
    # 在下方写你的代码：获取GET请求传递的数据
    key_words = request.args.get('kw')

    return '<h1>您搜索的内容是：%s</h1>' % key_words


app.run(host='127.0.0.1', port=8000)
