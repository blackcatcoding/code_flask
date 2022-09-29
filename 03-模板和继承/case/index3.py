from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

# info = '【资料站开张福利】快来和熊猫菌一起玩吧~'
info = ''


@app.route('/yrzx')
def yrzx():
    # 在下方写你的代码：返回模板变量
    return render_template('yrzx.html', info = info)


app.run(host='127.0.0.1', port=8002)
