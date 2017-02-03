var express = require('express');
var db = require('./db');
var app = express();
var url = 'mongodb://localhost:27017/mydb'

//TODO
// [x] pegar link
// [x] gerar um numero para representar a url
// [ ] guardar no bd link + novo link
// [ ] redirect do novo link para o link do bd

app.use('/new/:link', require('./newlink'))

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

