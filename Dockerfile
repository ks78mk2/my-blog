FROM node:12.2.0-alpine

RUN mkdir /app
RUN mkdir /app/front
WORKDIR /app/front

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.13.12-alpine 
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN ls -ltr
RUN pwd
RUN cd /app
RUN ls -ltr

EXPOSE 8080
