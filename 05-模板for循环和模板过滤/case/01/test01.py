from flask import Flask, render_template
from datetime import timedelta

app = Flask(__name__)

app.debug = True
app.send_file_max_age_default = timedelta(seconds=1)

gifts = [
    {'photo': 'gift01.png', 'name': 'AWP CAT'},
    {'photo': 'gift02.png', 'name': '速战券'},
    {'photo': 'gift03.png', 'name': '经验卡(大)'},
    {'photo': 'gift04.png', 'name': '医疗包'},
]


@app.route('/natu', methods=['GET'])
def natu():
    # 在下方写你的代码：
    return render_template('natu.html', gifts=gifts)


app.run(host='127.0.0.1', port=8001)
