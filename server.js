var test = require('./test');
var express = require('express');
var app = express();
app.use('/birds', test);
app.listen(3000, function (req, res) {
  console.log("Listening to port 3000");
})