FROM node:12.11.1

RUN mkdir /app
WORKDIR /app
ADD . /app

RUN yarn install
