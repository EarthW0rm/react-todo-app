const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://reactBack:senha123@172.17.0.3:27017',  { useMongoClient: true });