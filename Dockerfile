FROM node:12.11.1

RUN yarn install

RUN mkdir /app
WORKDIR /app

ADD . /app
