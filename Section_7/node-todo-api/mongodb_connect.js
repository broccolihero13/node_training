const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/toDoApp', (err,db)=>{
  if(err){
    return console.log(`Unable to connect to database. Received error: ${err}`);
  }
  console.log(`Successfully connected to MongoDB`);

  db.close();
});