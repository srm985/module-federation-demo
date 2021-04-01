const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    ModuleFederationPlugin
} = require('webpack').container;

const path = require('path');

module.exports = {
    devServer: {
        compress: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 3001
    },
    mode: 'production',
    module: {
        rules: [
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
            exposes: {
                './Button': './src/components/ButtonComponent'
            },
            filename: 'remoteEntry.js',
            library: {
                name: 'project_components',
                type: 'var'
            },
            name: 'project_components',
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
