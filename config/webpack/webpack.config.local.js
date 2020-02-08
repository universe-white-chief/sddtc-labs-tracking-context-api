'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '9000';

const CONTEXT_PATH = path.resolve(`${ __dirname }/../..`);
const DIST_PATH = `${ CONTEXT_PATH }/dist/webpack_dev/`;
const SRC_PATH = `${ CONTEXT_PATH }/src`;

const tsConfigFile = `${ CONTEXT_PATH }/tsconfig.json`;

module.exports = {
  mode: 'development',
  context: CONTEXT_PATH,
  entry: [ `webpack-dev-server/client?http://${ HOST }:${ PORT }`, 'webpack/hot/only-dev-server', `${ SRC_PATH }/index.tsx` ],
  output: {
    publicPath: '/',
    path: DIST_PATH,
    filename: `static/js/[name].js`,
    chunkFilename: `static/js/[name].js`,
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.json' ],
    plugins: [ new TsconfigPathsPlugin({ configFile: tsConfigFile }) ],
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
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: HOST,
    port: PORT,
    disableHostCheck: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${ SRC_PATH }/index.html`,
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyJS: {
          ascii_only: true
        }
      },
      chunks: [ 'main', 'vendors' ],
      showErrors: true,
    }),
    new CleanWebpackPlugin(),
  ],
};
