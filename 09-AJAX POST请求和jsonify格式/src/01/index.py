from flask import Flask, render_template, request

# 创建Flask应用
app = Flask(__name__)
app.debug = True


@app.route('/user/register', methods=['GET'])
def register_page():
    return render_template('index.html')


@app.route('/user/register', methods=['POST'])
def register():
   
    return username + '注册成功'


# 启动服务器程序
app.run(host='127.0.0.1', port=8001)
