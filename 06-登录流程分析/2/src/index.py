from flask import Flask, render_template, request

app = Flask(__name__)


app.run(host='127.0.0.1', port=8001)
