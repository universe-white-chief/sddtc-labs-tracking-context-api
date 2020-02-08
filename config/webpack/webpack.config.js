'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');
const CONTEXT_PATH = path.resolve(`${__dirname}/../..`);
const DIST_PATH = `${CONTEXT_PATH}/dist/webpack_dev/`;
const SRC_PATH = `${CONTEXT_PATH}/src`;

const tsConfigFile = `${CONTEXT_PATH}/tsconfig.json`;

module.exports = {
    mode: 'production',
    context: CONTEXT_PATH,
    entry: [`${SRC_PATH}/index.tsx`],
    output: {
        publicPath: '/',
        path: DIST_PATH,
        filename: `static/js/[name].[hash].js`,
        chunkFilename: `static/js/[name].[hash].js`,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        plugins: [new TsconfigPathsPlugin({ configFile: tsConfigFile })],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', options: { configFileName: tsConfigFile } },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                js: { test: /\.js$/, name: 'main' },
                commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors' },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${SRC_PATH}/index.html`,
            inject: true,
            minify: { minifyJS: { ascii_only: true } }, //escape Unicode characters, most of which are translation.
            chunks: ['main', 'vendors'],
            showErrors: true,
        }),
        new CleanWebpackPlugin(),
    ],
};
