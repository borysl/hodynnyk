var compressor = require('node-minify');
 
// Using Google Closure Compiler 
compressor.minify({
  compressor: 'gcc',
  input: 'foo.js',
  output: 'bar.js',
  callback: function (err, min) {}
});
 
// Using UglifyJS 
compressor.minify({
  compressor: 'uglifyjs',
  input: './**/*.js',
  output: 'bar.js',
  callback: function (err, min) {}
});
 
// Using Promise 
var promise = compressor.minify({
  compressor: 'uglifyjs',
  input: './**/*.js',
  output: 'bar.js'
});
 
promise.then(function(min) {});