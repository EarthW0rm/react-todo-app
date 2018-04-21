# FROM debian:jessie-slim AS SystemOS
# RUN apt-get update \
# 	&& apt-get install -y curl sudo \
# 	&& curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - \
# 	&& sudo apt-get update \
# 	&& sudo apt-get install -y nodejs \	
# 	&& sudo apt-get install -y build-essential \
# 	&& apt-get clean \
# 	&& apt-get autoremove \
# 	&& sudo apt-get clean \
# 	&& sudo apt-get autoremove

FROM alpine:3.7 AS SystemOS
RUN apk update \
	&& apk add --update nodejs nodejs-npm
EXPOSE 80

FROM SystemOS
COPY './package.json' '/app/package.json'
COPY './src/' '/app/src/'
WORKDIR /app
RUN npm i && npm install pm2 -g

CMD ["pm2-docker", "src/loader.js"]