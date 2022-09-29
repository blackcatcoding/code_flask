from flask import Flask, render_template
from datetime import timedelta

web = Flask(__name__)

web.debug = True
web.send_file_max_age_default = timedelta(seconds=1)

notice = {'photo': 'photo.jpg', 'title': 'challenge！', 'content': 'Heroes, 2020.04.25, WAITING for YOU TO fight!'}


@web.route('/blr', methods=['GET'])
def blr():
    # 在下方写你的代码：传递模板变量 notice
    return render_template('blr.html', notice=notice)


web.run(host='127.0.0.1', port=8001)
