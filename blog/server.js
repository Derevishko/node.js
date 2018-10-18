const express = require('express');
const app = express();
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const db = 'blog';

MongoClient.connect(url, function(err, client){
     if(err){
        return console.log(err);
    }
    client.db(db).collection('test').find({name:'lol'}).toArray((err,result) => {
      if (err) {
        console.log(err)
        client.close();
      } else {
        console.log(result);
        client.close();
      }
    })
});

const labrary = require('./routes/labrary.js')

app.use('/labrary', labrary)

app.get('/', (req,res) => {
  res.send('zdarova')
})

app.listen(3000)
