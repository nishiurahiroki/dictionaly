FROM python:latest

# flask
RUN pip install flask
RUN pip install flask-sqlalchemy==2.1

RUN pip install psycopg2

RUN mkdir /ap
RUN mkdir /ap/templates
RUN mkdir /ap/static

ADD . /ap
ADD ./templates/ /ap/templates

CMD ["python" , "/ap/app.py"]
