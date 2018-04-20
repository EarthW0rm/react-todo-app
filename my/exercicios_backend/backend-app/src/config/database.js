const envVars = require('./enviroment');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect(envVars.connerctionString ,  { useMongoClient: true });