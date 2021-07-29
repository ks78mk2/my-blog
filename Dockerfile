FROM nginx:1.13.12-alpine

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build /usr/share/nginx/html

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/nginx.conf

# 80 포트 오픈
EXPOSE 8080

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]