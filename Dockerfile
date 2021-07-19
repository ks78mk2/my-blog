FROM node:12.2.0-alpine as builder

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx 
EXPOSE 8080

COPY ./nginx/default.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build  /usr/share/nginx/html