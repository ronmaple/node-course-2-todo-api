//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate(filer, update, options, callback) => promise
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a5054fde92b5b35110274e6')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a4f1317ad95216463212af2')
  }, {
    $set: {
      name: 'Commercial'
    },
    $inc: {
      age: +1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
