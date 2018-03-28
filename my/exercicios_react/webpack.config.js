const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/webpack.index.jsx'
    , output:{
        path: __dirname + '/dist'
        , filename: 'bundle.js'
    }
    , resolve:{
        extensions: ['.js', '.jsx']
    }
    ,devServer:{
        port: 8080
        , contentBase: './dist'
    }
    , module: {
        rules: [
            {
                test: /\.jsx$/
                , exclude: /(node_modules|bower_components)/
                , use: [
                    {
                        loader: 'babel-loader'
                        , options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
            ,{
                test: /\.css$/
                , exclude: /(node_modules|bower_components)/
                , use: ['style-loader', 'css-loader']
            }
            ,{
                test: /\.scss$/
                , exclude: /(node_modules|bower_components)/
                , use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
            ,{
                test: /\.html$/
                , exclude: /(node_modules|bower_components)/
                , use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            }
        ]
    }
    , plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'
            , allChunks: true
        })
        , new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};