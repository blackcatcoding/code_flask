# 下方写你的代码:导入jsonify
from flask import Flask, render_template

info = [
    {'image': 'item01.png', 'title': '01·全新的双人同居玩法', 'content': '新人生存绑定同伴，相约<br/>探索末世双人同居体系升<br/>级，给你一个真正的家。'},
    {'image': 'item02.png', 'title': '02·末日新伙伴—鹦鹉上线', 'content': '末世社交萌宠来袭，<br/>学舌报警样样精通。'},
    {'image': 'item03.png', 'title': '03·辅助作战无人机来袭', 'content': '科技作战系统开启，收集<br/>材料自主组装四类辅助无<br/>人机，提升末世生存机率。'}
]

app = Flask(__name__)

@app.route('/mrzh', methods=['GET'])
def mrzh():
    return render_template('mrzh.html')


@app.route('/more', methods=['GET'])
def more():
    # 在下方写你的代码:使用jsonify返回数据
    return ''


app.run(host='127.0.0.1', port=8001)
