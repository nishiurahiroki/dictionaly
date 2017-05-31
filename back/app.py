from flask import Flask, render_template
app = Flask(__name__, static_url_path='/static')
app.config.update({'DEBUG':True})

@app.route('/')
def top():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 80)
