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
        if ((newUrlInserted.length != 0) && (newUrlInserted =! 'new')){
        db.get().collection('urls').find({newUrl : newUrlInserted}).toArray(function(err, documents) {
            if (err) throw err;
            console.log(documents);
            res.redirect("http://" + documents[0].originalLink);
        })
    }
    else {
        res.send('Insira uma barra "/" e o numero do link encurtado (ex: /12345) ou insira uma barra "/" e um link após "new" (ex: /new/www.google.com)');
    }
})
    

module.exports = app