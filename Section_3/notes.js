/*jshint esversion:6*/
// console.log("Starting notes.js");
/*modules.exports is a field that allows you to pull variables, functions and other objects out
of a file. It essentially preps them to be called at another location.
*/
const fs = require('fs');

let fetchNotes = () => {
  try {
    let getNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(getNotes);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };


  let duplicateNotes = notes.filter((note) => note.title === title);
  console.log(duplicateNotes);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    console.log(`Note has been added\n --- \n Title: ${note.title}\n Body: ${note.body}`);
  } else {
    console.log(`Sorry this title has already been used!`);
  }
};

let getAll = () => {
  return fetchNotes();
};

let readNote = (theTitle) => {
  // debugger;
  let notes = fetchNotes();
  let noteLookingFor = notes.find((note) => note.title === theTitle);
  if (noteLookingFor) {
    console.log(`${noteLookingFor.title}: ${noteLookingFor.body}`);
  } else {
    console.log(`${theTitle} not found`);
  }
};

let removeNote = (title) => {
  let allNotes = fetchNotes();
  let notesToKeep = allNotes.filter((note) => title != note.title);
  saveNotes(notesToKeep);
  return allNotes.length !== notesToKeep.length;
};
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
