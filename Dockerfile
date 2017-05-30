FROM python:latest

# pip
RUN pip install flask

RUN mkdir /ap
RUN mkdir /ap/templates

ADD ./back /ap
ADD ./public /ap/templates

CMD ["python", "/ap/app.py"]
