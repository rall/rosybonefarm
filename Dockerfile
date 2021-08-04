FROM node:14-alpine
RUN apk add --update nodejs nodejs-npm
RUN npm install --global nodemon
USER node
WORKDIR /home/node
CMD npm install && nodemon main.js
