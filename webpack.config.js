var path = require('path');
var cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const sassLoaders = [
  'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
  'postcss',
  'sass?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './app')
]

const scssLoaders = [
  [
    'css?modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&'),
  'postcss',
  'sass',
]

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: 'app.js',
    publicPath: '/build'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.json$/,
      loaders: ['json'],
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', scssLoaders.join('!'))
    },
    {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
    },
    { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
      new ExtractTextPlugin('app.css'),
      new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
  postcss: [
      cssnano({
        sourcemap: true,
        autoprefixer: {
          add: true,
          remove: true,
          browsers: ['last 2 versions']
        },
        safe: true,
        discardComments: {
          removeAll: true
        }
      })
    ],
    resolve: {
      extensions: ['', '.js', '.css', '.scss', '.sass', '.json'],
      modulesDirectories: ['app', 'node_modules', 'assets']
    }
};
