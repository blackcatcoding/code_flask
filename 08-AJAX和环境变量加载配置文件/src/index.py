from flask import Flask, render_template, request
from datetime import timedelta

app = Flask(__name__)

app.debug = True
app.send_file_max_age_default = timedelta(seconds=1)



@app.route('/fantacy', methods=['GET'])
def fantacy():

    return render_template('fantacy.html')


@app.route('/story', methods=['GET'])
def story():

    s = '由水晶创造出的世界，"梅尔法利亚"<br/>梅尔法利亚由被后世称为最初之王的马路库提斯·埃斯塞提亚所领导的埃斯塞提亚王国所统治，所有生物都能得到水晶的恩惠，人们也过着和平的生活。<br/><br/>但是得到水晶的力量而发达的人们开始有了野心。<br/>世界各地起了纷争，持续已久的埃斯塞提亚王国的时代告终。<br/><br/>在大国灭亡后经过二大王国时代、帝国时代、英雄时代，<br/>现在有抱着各自的思想的五位王者为了平定大陆站了出来。<br/><br/>再次到来的战乱，何时会是尽头。'
    return s


app.run(host='127.0.0.1', port=8001)
