var express = require('express')
var app = express()

var db = require('./db')

app.get('/', function(req, res){
    res.send('Hello link');
})

app.get('/:link', function(req, res){
    res.send('Hello link with links');
})

module.exports = app