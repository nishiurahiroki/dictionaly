FROM node:7.0

RUN mkdir app
RUN mkdir app/src
RUN mkdir app/output

ADD package.json /app/package.json
ADD webpack.config.js /app/webpack.config.js

WORKDIR /app

RUN npm install

CMD ["cd", "/app"]
CMD ["npm", "run", "watch"]