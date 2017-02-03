var express = require('express')
var app = express()
var db = require('./db')

function generateUrl() {
    return (Math.random() * 100000).toFixed(0);
}
// function validateURL(url) {
//     // Regex from https://gist.github.com/dperini/729294
//     var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
//     return regex.test(url);
//   }


app.get('/:link', function(req, res){
    var link = req.params.link;
    var urlNumber = generateUrl();
    if (link){
        var linkObject = { "originalLink" : link , 
                            "newUrl" : urlNumber }
        db.get().collection('urls').insert(linkObject, function(err, data){
            if (err) throw err;
            res.send(linkObject)
        })
    }
    else {
        res.send("Esse link não é válido, insira outro")
    }
})

module.exports = app