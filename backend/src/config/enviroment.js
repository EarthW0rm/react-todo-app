module.exports = {
    api_port: (typeof process.env.API_PORT == 'undefined' ? 8080 : process.env.API_PORT)
    , connerctionString: (typeof process.env.CONNECTIONSTRING == 'undefined' ? 'mongodb://adalovelace:_ada_rules_allan_to_@localhost:27017' : process.env.CONNECTIONSTRING)
}