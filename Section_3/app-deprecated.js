/*jshint esversion: 6*/
console.log("Starting App...");

//requirements - fs and os are built-in while notes is a file I created
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.uniq([1, 1, 2, 2, 3, 4, 5, 4, 5, 6, "Brock", "Brock", "Rose"]));
// console.log(_.isString(true), _.isString(`Andrew`));

//these items were pulled from notes.js using module.exports property
let res = notes.addNote();
console.log(notes.add(1, 3));

//this gets the user's info and assigns it
let user = os.userInfo();
console.log(user);

//this opens or creates a file (greetings.txt) and appends the string, it also catches if an error occurs
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}!\n`, function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});


console.log("Exiting App...");
