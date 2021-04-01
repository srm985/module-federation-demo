const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    ModuleFederationPlugin
} = require('webpack').container;

const path = require('path');

module.exports = {
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    },
    mode: 'development',
    module: {
        rules: [
            {
                loader: 'bundle-loader',
                options: {
                    lazy: true
                },
                test: /bootstrap\.js$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react'
                    ]
                },
                test: /\.jsx?$/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            path: path.join(__dirname, '../dist/'),
            template: './src/index.html'
        }),
        new ModuleFederationPlugin({
            remotes: {
                project_components: 'project_components@http://localhost:3001/remoteEntry.js'
            },
            shared: {
                react: {
                    singleton: true
                },
                'react-dom': {
                    singleton: true
                }
            }
        })
    ]
};
