#!/bin/bash
source .host.env

echo "watching for migration changes"
npx prisma generate --watch