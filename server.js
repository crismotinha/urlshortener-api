var express = require('express');
var db = require('./db');
var app = express();
var url = process.env.MONGOLAB_URI;


// process.env.MONGOLAB_URI;

//TODO
// [x] pegar link
// [x] gerar um numero para representar a url
// [ ] guardar no bd link + novo link
// [ ] redirect do novo link para o link do bd

app.use('/new', require('./newlink'))

app.use('/', require('./redirect'))

db.connect(url, function (err, database) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    app.listen(process.env.PORT || 8080, function(){
        console.log("Listenando da porta 8080");
    });
    
  }
});

