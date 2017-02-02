var express = require('express');
var mongodb = require('mongodb');
var app = express();
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/mydb'
var db;
//TODO
// [x] pegar link
// [x] gerar um numero para representar a url
// [ ] guardar no bd link + novo link
// [ ] redirect do novo link para o link do bd


db = MongoClient.connect(url, function (err, database) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    app.listen(process.env.PORT || 8080, function(){
        console.log("Listenando da porta 8080");
    });
    
    database.close()
  }
});

