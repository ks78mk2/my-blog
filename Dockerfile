FROM node:12.2.0-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.13.12-alpine 
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
