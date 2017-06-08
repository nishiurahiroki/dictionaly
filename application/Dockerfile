FROM python:latest

# flask
RUN pip install flask
RUN pip install flask-sqlalchemy==2.1

RUN pip install psycopg2

RUN mkdir /ap
RUN mkdir /ap/templates
RUN mkdir /ap/static

ADD ./back /ap
ADD ./public /ap/templates
ADD ./resources /ap/static

CMD ["python" , "/ap/app.py"]
