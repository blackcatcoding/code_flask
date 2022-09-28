from flask import Flask, render_template
from datetime import timedelta

app = Flask(__name__)

app.debug = True
app.send_file_max_age_default = timedelta(seconds=1)

info = {'version': 'Ver.0.2.94.1', 'file_length': '1.95G', 'update_time': '2019-1-29'}


@app.route('/sdo', methods=['GET'])
def sdo():
    # 在下方写你的代码：返回模板变量
    return render_template('sdo.html', info=info)


app.run(host='127.0.0.1', port=8001)
