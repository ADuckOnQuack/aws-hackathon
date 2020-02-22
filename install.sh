#!/bin/bash

rm -rf aws-app/build
rm -rf aws-app/node_modules
cp -R ./ ../backend

cp Dockerfile-front Dockerfile
docker build -t node-front .

cd ../backend
cp Dockerfile-backend Dockerfile
docker build -t node-backend .

docker run -d --rm node-backend
docker run -d --rm -p:3000:80 node-front
