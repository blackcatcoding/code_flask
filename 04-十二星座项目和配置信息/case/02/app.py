import ssl
from flask import Flask, render_template, request
import tools

ssl._create_default_https_context = ssl._create_unverified_context
# 创建web应用
app = Flask(__name__)
# 开启debug模式
app.debug = True

# 1.使用配置文件
app.config.from_pyfile('config.cfg')

# 2.使用对象配置参数
class DefaultConfig:

    USERNAME = 'cat'
    PASSWD = '123456'

class Config(DefaultConfig):

    DEBUG = True

    SCORE = 100

app.config.from_object(Config)

# 3.config直接操作字典对象
app.config['LEVEL'] = 1


# 创建视图函数，注册路由/star
@app.route('/star', methods=['GET'])
def star():
    # 获取星座数据
    # print('hello cat2.')
    print(app.config.get('USERNAME'))
    print(app.config['SCORE'])
    print(app.config['LEVEL'])
    stars = tools.star_list()
    return render_template('star_home.html', stars=stars)


# 在下方写你的代码:注册路由/star/fortune
@app.route('/star/fortune')
def star_fortune():

    star = request.args.get('star')
    star_fortune = tools.star_fortune(star)

    return render_template('star_fortune.html', fortune=star_fortune)

# 启动服务器

# app.run()
# app.run(host='127.0.0.1', port=8000)
# app.run(host='192.168.92.143', port=8000)
app.run(host='0.0.0.0', port=8000)

