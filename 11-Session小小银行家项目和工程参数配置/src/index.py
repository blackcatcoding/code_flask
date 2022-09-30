from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/')
def index():

    return render_template('index.html')


@app.route('/save', methods=['POST'])
def save():

    # 在下方写你的代码：设置session，保存用户存款金额
    
    return '成功存储了 元'


@app.route('/query', methods=['GET'])
def query():
    # 在下方写你的代码：获取session,计算总金额

    return '余额:'


if __name__ == "__main__":
    app.run(
        host='127.0.0.1',
        port=8001
    )
