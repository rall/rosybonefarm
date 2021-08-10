FROM node:14-buster AS builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y nodejs npm openssl && rm -rf /var/lib/apt/lists/*
RUN npm install --global nodemon
USER node
WORKDIR /home/node
RUN mkdir nestjs prisma
FROM builder AS development
COPY entrypoint.dev.sh /home/node/entrypoint.sh
