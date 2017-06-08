import json
import flask
from flask import Flask, render_template, request, jsonify
from repositorys.dictionalyRepository import DictionalyRepository

app = Flask(__name__, static_url_path='/static')
app.config.update({'DEBUG':True})

@app.route('/')
def top():
    return render_template('index.html')


@app.route('/api/regist', methods=['POST'])
def regist():
    dictionaly = DictionalyRepository(
        flask.request.json['japanase_name'],
        flask.request.json['english_name'],
        flask.request.json['descliption']
    )
    dictionaly.db.session.add(dictionaly)
    dictionaly.db.session.commit()
    
    return jsonify({
        'result' : 'success'
    })


@app.route('/api/delete', methods=['POST', 'GET'])
def delete():
    # TODO
    return jsonify({
        'result':'success'
    })


@app.route('/api/search', methods=['GET'])
def search():
    query = DictionalyRepository.query.all()
    # TODO イテレータの扱い方に迷いを感じる
    dictionalys = map(lambda data:
                      {
                          'japanaseName' : data.japanase_name
                      }
                      , query)
    

    return jsonify(
        list(dictionalys)
    )


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
