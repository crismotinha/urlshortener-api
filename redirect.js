var express = require('express')
var app = express()
var db = require('./db')

function generateUrl() {
    return (Math.random() * 100000).toFixed(0);
}

app.get('/', function(req, res){
    res.send('Insira uma barra "/" e o numero do link encurtado (ex: /12345) ou insira uma barra "/" e um link após "new" (ex: /new/www.google.com)');
})

app.get('/:newUrl', function(req, res){
    var newUrlInserted = req.params.newUrl;
    var urlNumber = parseInt(newUrlInserted)
    if (isNaN(newUrlInserted)){
        res.send('Insira uma barra "/" e o numero do link encurtado (ex: /12345) ou insira uma barra "/" e um link após "new" (ex: /new/www.google.com)');
    }
    else {
        db.get().collection('urls').find({newUrl : newUrlInserted}).toArray(function(err, documents) {
            if (err) throw err;
            res.redirect("http://" + documents[0].originalLink);
        })
    }
})
    

module.exports = app