const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/toDoApp', (err,client)=>{
  if(err){
    return console.log(`Unable to connect to database. Received error: ${err}`);
  }
  console.log(`Successfully connected to MongoDB`);
  
  const db = client.db('toDoApp');

  // db.collection('Todos').insertOne({text: "Check off Trello box", status: "completed"},(err,result)=>{
  //   if(err){
  //     return console.log(`Unable to add to the Todos collection. Received error: ${err}`);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({name: "Brock Halladay", age: 30, location: "Took the midnight train going anywhere"},(err,result)=>{
    if(err){
      return console.log("somethingwentwrong");
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  client.close();
});