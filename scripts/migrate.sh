#!/bin/bash
source .host.env

echo "try migration"
while ! npx prisma migrate dev; do
  sleep 2
done
echo "Migration done"
