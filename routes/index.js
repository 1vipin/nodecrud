var express = require('express')
var app = express()

app.get('/', function(req, res) {
	
	res.render('index', {title: 'welcome to user data'})
})

module.exports = app;
