from repositorys.repository import db, Repository


class DictionalyRepository(db.Model, Repository):
    __tablename__ = 'dictionaly'

    japanase_name = db.Column(db.String(255), primary_key=True)
    english_name = db.Column(db.String(255))
    descliption = db.Column(db.Text)

    def __init__(self, japanase_name, english_name, descliption):
        self.japanase_name = japanase_name
        self.english_name = english_name
        self.descliption = descliption
