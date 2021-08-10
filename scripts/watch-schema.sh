#!/bin/bash
source .env
export DATABASE_URL="postgresql://${POSTGRES_APP_USER}:${POSTGRES_APP_PASSWORD}@kubernetes.docker.internal:5432/${POSTGRES_APP_DB}"

echo "watching for migration changes"
npx prisma generate --watch