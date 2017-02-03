var express = require('express')
var app = express()
var db = require('./db')

function generateUrl() {
    return (Math.random() * 100000).toFixed(0);
}

app.get('/', function(req, res){
    res.send('Insira uma barra "/" e um link após "new" (ex: /new/www.google.com)');
})

app.get('/:link', function(req, res){
    var link = req.params.link;
    var urlNumber = generateUrl();
    var linkObject = { "originalLink" : link , 
                        "newUrl" : urlNumber }
    db.get().collection('urls').insert(linkObject, function(err, data){
        if (err) throw err;
        res.send(linkObject)
        db.close();
    })
    
})

module.exports = app