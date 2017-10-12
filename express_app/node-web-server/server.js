const express = require('express');

let app = express();

app.get('/', (request, response)=>{
  response.send("Hello Express");
});

app.get('/brocktest', (request, response)=>{
  response.send({
    title: "Brock's Test Page",
    hobby: "Web Development",
    id: "p1",
    body: {
      "title": "Page 1",
      "sub-title": "Hero's Beginning",
      "Character": "Veggiman",
      "started": false
    },
    begin: function(){
      body.started = true;
    }
  });
});

app.get('/bad', (request, response)=>{
  response.send({
    title: null,
    id: "NO ID FOUND",
    body: {}
  })
});
app.listen(3000);