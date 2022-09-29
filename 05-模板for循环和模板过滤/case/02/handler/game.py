from flask import Blueprint,render_template

game = Blueprint('game',__name__)

@game.route('/game/index',methods=['GET'])
def game_index():
	return render_template('game.html')