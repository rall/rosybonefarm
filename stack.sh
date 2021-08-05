#!/bin/sh
docker image build --tag="rosybone/api" docker/api/
docker image build --tag="rosybone/sqlite3" docker/sqlite3/
docker stack deploy --compose-file docker-compose.yaml rosybone
