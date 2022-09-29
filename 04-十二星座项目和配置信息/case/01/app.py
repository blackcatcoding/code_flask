import ssl
import tools
# 导入 Flask 类
from flask import Flask, render_template

ssl._create_default_https_context = ssl._create_unverified_context

# 创建web应用
app = Flask('app', static_url_path='/static', static_folder='static', template_folder='templates')

# 开启debug模式
app.debug = True

# 创建视图函数，注册路由/star
@app.route('/star')
def star():

	stars = tools.star_list()
	return render_template('star_home.html', stars=stars)


# 启动服务器
if __name__ == '__main__':

	app.run(host='127.0.0.1', port=8000)
