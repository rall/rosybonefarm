#!/bin/bash

echo "Waiting for postgres"
while ! npx ./check-postgres; do
  sleep 2
done
echo "Postgres ready"

echo "postgresql://${POSTGRES_APP_USER}:${POSTGRES_APP_PASSWORD}@${DATABASE_HOST}:5432/${POSTGRES_APP_DB}"
DATABASE_URL="postgresql://${POSTGRES_APP_USER}:${POSTGRES_APP_PASSWORD}@${DATABASE_HOST}:5432/${POSTGRES_APP_DB}" nodemon nestjs/main.js
