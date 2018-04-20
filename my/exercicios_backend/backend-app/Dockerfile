FROM alpine:3.7
RUN apk update \
	&& apk add --update nodejs nodejs-npm

COPY './package.json' '/app/package.json'
COPY './src/' '/app/src/'

WORKDIR /app
RUN npm i && npm install pm2 -g

CMD ["pm2-docker", "src/loader.js"]

# FROM debian:jessie-slim
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

# COPY './package.json' '/app/package.json'
# COPY './src/' '/app/src/'

# ENV MYV 'Say Hello'

# WORKDIR /app
# RUN npm i && npm install pm2 -g

# EXPOSE 80
# CMD ["pm2-docker", "src/loader.js"]