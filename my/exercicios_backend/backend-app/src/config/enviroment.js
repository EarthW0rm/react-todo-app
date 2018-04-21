module.exports = {
    api_port: (typeof process.env.API_PORT == 'undefined' ? 3003 : process.env.API_PORT)
    , connerctionString: (typeof process.env.CONNECTIONSTRING == 'undefined' ? 'mongodb://reactBack:senha123@172.17.0.2:27017' : process.env.CONNECTIONSTRING)
}