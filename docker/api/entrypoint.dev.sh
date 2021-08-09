#!/bin/bash

echo "starting api"
DATABASE_URL="postgresql://${POSTGRES_APP_USER}:${POSTGRES_APP_PASSWORD}@${DATABASE_HOST}:5432/${POSTGRES_APP_DB}" nodemon nestjs/main.js
