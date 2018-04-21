const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.jsx'
    , output:{
        path: __dirname + '/dist'
        , filename: './app.js'
    }
    ,devServer:{
        port: 82
        , contentBase: './dist'
    }
    , resolve:{
        extensions: ['.js', '.jsx', '.scss', '.css', '.html']
        , alias: {
            modules: __dirname + '/node_modules'
        }
    }    
    , module: {
        rules: [
            {
                test: /\.js[x]$/
                , exclude: /(node_modules|bower_components)/
                , use: [
                    {
                        loader: 'babel-loader'
                        , options: {
                            presets: ['es2015', 'react']
                            , plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            }
            ,{
                test: /\.css$/
                , use: ExtractTextPlugin.extract({
                    use: [ 'css-loader']
                })
            }
            ,{
                test: /\.scss$/
                , exclude: /(node_modules|bower_components)/
                , use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }            
            ,{
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/
                , use: [
                    {
                      loader: "file-loader",
                    }
                ]
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
            filename: 'app.css'
            , allChunks: true
        })
        , new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};