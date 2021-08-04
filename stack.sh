#!/bin/sh
docker image build --tag="rosybone/api" .
docker stack deploy --compose-file docker-compose.yaml rosybone
