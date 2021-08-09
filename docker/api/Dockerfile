FROM node:14-buster AS builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y nodejs npm openssl && rm -rf /var/lib/apt/lists/*
RUN npm install --global nodemon
USER node
WORKDIR /home/node/
RUN mkdir nestjs
ADD check-postgres check-postgres
RUN npm install ./check-postgres
FROM builder AS development
COPY entrypoint.dev.sh entrypoint.sh
