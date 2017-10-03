/*jshint esversion:6*/
// let obj = {
//   name: `Andrew`
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);
// let personString = `{"name": "Brock", "age": 29}`;
// let person = JSON.parse(personString);
// console.log(typeof(person), typeof(personString));
// console.log(person.name, person.age);
const fs = require(`fs`);
//Lines 15-21 will write this as a JSON object to the notes.json file
let originalNote = {
  title: `Some title`,
  body: `Some body`
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync(`notes.json`, originalNoteString);
//Lines 23-24 will read the file notes.json and parse the object and assign the keys to note variable
let noteString = fs.readFileSync(`notes.json`);
let note = JSON.parse(noteString);

console.log(note.title);
console.log(note.body);
