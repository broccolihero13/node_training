/*jshint esversion:6*/
let person = {
  name: `Brock`
};

person.age = 29;

//node debug <filename> will run, hit 'c' to run the code until debugger keyword
//'n' to go to the next spot
debugger;
//use 'repl' to check variables and run code
person.name = `Not Brock`;

console.log(person);
