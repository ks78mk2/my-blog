FROM node:12.2.0-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.13.12-alpine 
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node:12.2.0-alpine /app/build  /usr/share/nginx/html

EXPOSE 8080
