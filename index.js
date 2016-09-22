var express = require('express');
var app = express();

var server = app.listen(3000, function () {
	console.log('The app is listening on https://localhost:3000');
});

app.get('/', function (req, res) {
	res.send('Hello Web!');
});