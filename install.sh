#!/bin/bash

rm -rf aws-app/build
rm -rf aws-app/node_modules
cp -R ./ ../backend

cp Dockerfile-front Dockerfile
sudo docker build -t node-front .

cd ../backend
cp Dockerfile-backend Dockerfile
sudo docker build -t node-backend .

sudo docker run -d --rm node-backend
sudo docker run -d --rm -p:80:5000 node-front
