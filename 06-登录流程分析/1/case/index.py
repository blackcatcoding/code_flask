from flask import Flask, render_template, request

# 创建Flask应用
app = Flask(__name__)
app.debug = True

# 已经注册用户的列表
users = [
    {'id': '1', 'username': 'jack', 'password': '123456'},
    {'id': '2', 'username': 'allen', 'password': '000000'},
    {'id': '3', 'username': 'blackcat', 'password': '888888'}
]

def find(username):

    for user in users:
        if user['username'] == username:
            return user 

    return None

@app.route('/user/login_data', methods=['GET'])
def login2():
    # 获取请求参数用户名和密码，用变量username和password保存
    username = request.args.get('username')
    password = request.args.get('password')
    # 查找用户是否存在 user = find(username)
    user = find(username)
    # 判断用户名是否存在
    if user is None:
        return render_template('index.html', username=username, user_msg='用户名不存在')
    # 判断密码是否正确
    if user['password'] != password:
        return render_template('index.html', pass_msg='密码错误')

    # 返回“登录成功”
    return '<h1>登录成功</h1>'


@app.route('/user/login', methods=['GET'])
def login():
    # 返回首页index.html
    return render_template('index.html')


# 启动服务器程序
app.run(host='127.0.0.1', port=8002)
