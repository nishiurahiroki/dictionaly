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
    param = flask.request.values;
    dictionaly = DictionalyRepository(
        param.get('japanase_name'),
        param.get('english_name'),
        param.get('descliption')
    )
    dictionaly.db.session.add(dictionaly)
    dictionaly.db.session.commit()
    
    return jsonify({
        'result' : 'success'
    })


@app.route('/api/delete', methods=['POST'])
def delete():
    key = flask.request.values.get('key');
    dictionaly = DictionalyRepository.query.filter_by(japanase_name = key).first()
    dictionaly.db.session.delete(dictionaly)
    dictionaly.db.session.commit()
    return jsonify({
        'result':'success'
    })


@app.route('/api/search', methods=['GET'])
def search():
    query = DictionalyRepository.query.all()
    dictionalys = map(lambda data:
                      {
                          'japanaseName' : data.japanase_name,
                          'englishName' : data.english_name,
                          'descliption' : data.descliption
                      }
                      , query)
    
    return jsonify(
        list(dictionalys)
    )


if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
