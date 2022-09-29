from flask import Blueprint,render_template

microblog = Blueprint('microblog',__name__)

@microblog.route('/microblog/index',methods=['GET'])
def microblog_index():
	return render_template('index.html')
