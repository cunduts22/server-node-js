require('esm') 
require("babel-register")({
  presets: ['es2015-node6'],
  ignore: false,
  extensions: [".es6", ".es", ".jsx", ".js"],
  cache: true
});
require('./server.js');
