var compressor = require('node-minify')

// Using Google Closure Compiler
compressor.minify({
  compressor: 'gcc',
  input: './js/clock.js',
  output: 'clock_gcc.js',
  callback: function (err, min) {
    if (err) {
      console.log(err)
    }
  }
})

// Using UglifyJS
compressor.minify({
  compressor: 'uglifyjs',
  input: './js/clock.js',
  output: 'clock_ujs.js',
  callback: function (err, min) {
    if (err) {
      console.log(err)
    }
  }
})

// Using Promise
var promise = compressor.minify({
  compressor: 'uglifyjs',
  input: './js/clock.js',
  output: 'clock_ujs_promis.js'
})

promise.then(function (min) {
})
