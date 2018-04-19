FROM debian:jessie-slim
# COPY './mongo_initial_script.js' /data/mongo_initial_script.js

RUN mkdir app \
	&& apt-get update \
	&& apt-get install -y curl sudo \
	&& curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - \
	&& sudo apt-get update \
	&& sudo apt-get install -y nodejs \	
	&& sudo apt-get install -y build-essential \
	&& apt-get clean \
	&& apt-get autoremove \
	&& sudo apt-get clean \
	&& sudo apt-get autoremove
	
# RUN mongod --bind_ip_all --quiet & \
# 	sleep 10 \
# 	&& mongo --eval "load('/data/mongo_initial_script.js');" \
# 	&& mongod --shutdown
EXPOSE 80
# CMD ["mongod", "--auth", "--bind_ip_all"]