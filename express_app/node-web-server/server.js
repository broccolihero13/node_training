const express = require('express');
const hbs = require('hbs');

let app = express();
let currentUser = "James Bond";

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

let homePageValues = {
  title: "Home Page",
  year: new Date().getFullYear(),
  author: "Brock Halladay",
  welcomeMessage: `Hello, ${currentUser}, welcome to this express app`
}
app.get('/', (request, response)=>{
  response.render('home.hbs', homePageValues);
});

let aboutPageValues = {
  title: "About Page",
  year: new Date().getFullYear(),
  author: "Brock Halladay"
}
app.get('/about', (request, response)=>{
  response.render('about.hbs', aboutPageValues);
})

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
app.listen(3000, ()=>{console.log('Server is up on port 3000')});