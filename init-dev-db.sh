#!/bin/bash
docker-compose -f db-compose.yaml -p dev_db  up  -d --force-recreate