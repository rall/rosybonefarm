#!/bin/bash
export DATABASE_URL=postgresql://${POSTGRES_APP_USER}:${POSTGRES_APP_PASSWORD}@${DATABASE_HOST}:5432/${POSTGRES_APP_DB}
cd nestjs
ln -s ../prisma/ ./db

npm install
# TODO why can't I run `prisma migrate dev` here?
npx prisma generate --schema=db/schema.prisma
echo "starting api"
nodemon main.js