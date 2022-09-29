from flask import Blueprint,render_template

quiz = Blueprint('quiz',__name__)

@quiz.route('/quiz/index',methods=['GET'])
def quiz_index():
	return render_template('quiz.html')
