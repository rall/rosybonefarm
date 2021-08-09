#!/bin/sh
docker image build --tag="rosybone/api" docker/api/
docker image build --tag="rosybone/postgres" docker/postgres/
docker stack deploy --compose-file docker-compose.yaml rosybone
