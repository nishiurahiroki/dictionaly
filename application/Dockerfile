FROM python:latest

# flask
RUN pip install flask

RUN mkdir /ap
RUN mkdir /ap/templates
RUN mkdir /ap/static

ADD ./back /ap
ADD ./public /ap/templates
ADD ./resources /ap/static

CMD ["python" , "/ap/app.py"]
