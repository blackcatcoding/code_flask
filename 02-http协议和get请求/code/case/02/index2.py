from flask import Flask, render_template, request

app = Flask(__name__)
app.debug = True

@app.route('/', methods=['GET'])
def index():
    return render_template('order.html')


@app.route('/order', methods=['GET'])
def order():
    # 在下方写你的代码：获取GET请求传递的数据

    key_words = request.args.get('kw')

    return '<h1>您点的餐是：%s</h1>' % key_words


app.run(host='127.0.0.1', port=8001)
