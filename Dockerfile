FROM node:12.2.0-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:1.13.12-alpine 
COPY /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build  /usr/share/nginx/html
EXPOSE 8080
