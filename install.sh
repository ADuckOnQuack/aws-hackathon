#!/bin/bash

cd aws-app
npm install; npm run build
cd api
npm install
cd ../../
cp -R ./ ../backend

cd ../backend
cp Dockerfile-backend Dockerfile
sudo docker build -t node-backend .

sudo docker run -d --net=host --rm node-backend

cd ../aws-hackathon
cp Dockerfile-front Dockerfile
sudo docker build -t node-front .

sudo docker run -d --rm --net=host -p:80:5000 node-front
