from flask import Flask, render_template, request, redirect, make_response

app = Flask(__name__)

app.debug = True

@app.route('/test01')
def test01():

    return 'hello cat.', 789, {'LOGO': 'CAT'}

@app.route('/test02')
def test02():

    return 'hello cat2.', 666, {'Content-Type': 'application/json'}

@app.route('/test03')
def test03():

    return 'hello cat3.', 888, [('LOGO', 'CAT3')]

@app.route('/test04')
def test04():

    response = make_response('hello cat4.')
    response.headers['LOGO'] = 'CAT4'
    response.status = '444'

    return response

@app.route('/', methods=['GET'])
def home():
    return render_template('g_home.html')

@app.route('/login', methods=['GET'])
def login_page():
    # 在下方写你的代码:获取cookie并验证，如果是yes则重定向到首页
    auto_login = request.cookies.get('auto_login')
    if auto_login == 'yes':
        return redirect('/')

    return render_template('g_login.html')


@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    if email or password is "":
        return render_template('g_login.html')

    response = redirect('/')
    # 在下方写你的代码：设置cookie，键为auto_login,值为yes
    response.set_cookie('auto_login', 'yes')

    return response


app.run(host='127.0.0.1', port=8003)
