//Para rodar na 80 usar SUDO
const envVars = require('./enviroment');
const port = envVars.api_port;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.use(function (req, res, next) {
    console.log(`Verbo ${req.method}! Chama q e nois........`);
    next();
});

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`BACKEND Runnig in ${port}`);
    console.log(envVars.connerctionString);
});

module.exports = server;