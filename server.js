var fs = require('fs');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require("express");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const path = require('path')
var app = new express();
var port = 3000;

var compiler = webpack(config);
var bodyParser = require('body-parser');

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use("/assets", express.static('assets', {
    maxAge: "200d" // We can cache them as they include hashes
  }));


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'))
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})





app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
