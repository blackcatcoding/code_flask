from flask import Flask, render_template, request, redirect, session 


class DefaultConfig:

    DEBUG = True  

class DevelopmentConfig(DefaultConfig):

    SECRET_KEY = 'NPHjiklfM'

def createFlaskApp(config):

    app = Flask(__name__)

    app.config.from_object(config)

    app.config.from_envvar('CAT_CONFIG', silent=True)

    return app 

app = createFlaskApp(DevelopmentConfig)


@app.route('/')
def index():

    # print(app.config['SECRET_KEY'])
    # print(app.config['USERNAME'], app.config['PASSWORD'])
    return render_template('index.html')


@app.route('/save', methods=['POST'])
def save():

    # 在下方写你的代码：设置session，保存用户存款金额
    money = int(request.form.get('money'))

    if 'money' not in session:
        session['money'] = [money]
    else:
        tmp_li = session['money']
        tmp_li.append(money)
        session['money'] = tmp_li
    
    return '成功存储了%s元' % money


@app.route('/query', methods=['GET'])
def query():
    # 在下方写你的代码：获取session,计算总金额
    count = sum(session.get('money'))

    return '余额:%s元' % count


if __name__ == "__main__":
    app.run(
        host='127.0.0.1',
        port=8001
    )
