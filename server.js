/*jshint esversion: 6 */

const express = require('express'),
      app = express(),
      path    = require('path'),
      bodyParser = require('body-parser');

const port = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(port, () => {
  console.log("App is running on PORT: ", port);
});
