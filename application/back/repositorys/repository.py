from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:@db/postgres'

db = SQLAlchemy(app)

class Repository():
    db = db
