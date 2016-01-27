var webpack = require('webpack');
var config = require('./webpack.config');

var myConfig = Object.create(config);
myConfig.plugins = myConfig.plugins.concat(
  new webpack.DefinePlugin({
    "process.env": {
      // This has effect on the react lib size
      "NODE_ENV": JSON.stringify("production")
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
);

// run webpack
webpack(myConfig, function(err, stats) {
  if(err) throw new gutil.PluginError("webpack:build", err);
  console.info("[webpack:build]", stats.toString({
    colors: true
  }));
});
