#!/bin/bash

docker compose -p opt_in_ru_v2 --env-file=.env -f "./docker/$1/docker-compose.yml" up -d --build --force-recreate --remove-orphans

if [[ -n `docker images -f "dangling=true" -q` ]]
then
  docker rmi $(docker images -f "dangling=true" -q)
fi