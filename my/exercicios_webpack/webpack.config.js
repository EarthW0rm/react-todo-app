const webpack = require('webpack');

module.exports = {
    entry:'./ex/index.js'
    , output:{
        path: __dirname + '/public'
        , filename: './bundle.js'
    }
    , devServer: {
        port: 8080
        , contentBase: './public'
    }
    , module: {
        rules: [
          {
            test: /.js?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
                , plugins: ['transform-object-rest-spread']
              }
            }
          }
        ]
      }
}