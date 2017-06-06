from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='/static')
app.config.update({'DEBUG':True})
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:@db/postgres'
SQLAlchemy(app)


@app.route('/')
def top():
    return render_template('index.html')


@app.route('/api/regist', methods=['POST'])
def regist():
    # TODO
    return jsonify({'test':'regist'})


@app.route('/api/delete', methods=['POST'])
def delete():
    # TODO
    return jsonify({'test':'delete'})


@app.route('/api/search', methods=['GET'])
def search():
    # TODO
    return jsonify({'test':'search'})


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
