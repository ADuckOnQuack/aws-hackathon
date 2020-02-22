#!/bin/bash

cd aws-app
npm install
cd api
npm install
cp -R ./ ../backend

cp Dockerfile-front Dockerfile
sudo docker build -t node-front .

cd ../backend
cp Dockerfile-backend Dockerfile
sudo docker build -t node-backend .

sudo docker run -d --net=host --rm node-backend
sudo docker run -d --rm --net=host -p:80:5000 node-front
