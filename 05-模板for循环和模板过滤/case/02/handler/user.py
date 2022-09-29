from flask import Blueprint,render_template,redirect,request

user = Blueprint('user',__name__)

@user.route('/user/login',methods=['GET'])
def login_page():
	return render_template('login.html')

@user.route('/user/login',methods=['POST'])
def login():
	username = request.form.get('username')
	password = request.form.get('password')
	if username == 'xiaotong' and password == '123456':
		return redirect('/microblog/index')
	else:
		return render_template('login.html',username=username)
