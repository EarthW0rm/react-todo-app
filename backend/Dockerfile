FROM alpine:3.7 as SystemOS
RUN mkdir -p /data/db /data/configdb \
	&& apk add --no-cache mongodb \
	&& apk add --no-cache nodejs nodejs-npm
EXPOSE 8080

FROM SystemOS

ENV CONNECTIONSTRING=mongodb://adalovelace:_ada_rules_allan_to_@localhost:27017
ENV API_POR=8080

COPY './mongo_initial_script.js' /data/mongo_initial_script.js
COPY './package.json' '/app/package.json'
COPY './src/' '/app/src/'
RUN mongod --bind_ip 0.0.0.0 & \
	sleep 10 \
	&& mongo --eval "load('/data/mongo_initial_script.js');" \
	&& mongod --shutdown \
	&& cd app \
	&& npm i \
	&& npm install pm2 -g
WORKDIR /app

CMD pm2-docker src/loader.js & mongod --auth --bind_ip 0.0.0.0