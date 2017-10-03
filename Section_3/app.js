/*jshint esversion: 6*/

//requirements - fs and os are built-in while notes is a file I created
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: `Title of note`,
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: `Body of the note`,
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command(`add`, `Add a new note`, {
    title: titleOptions,
    body: bodyOptions
  })
  .command(`list`, `List all notes`)
  .command(`read`, `Reads a single note`, {
    title: titleOptions
  })
  .command(`remove`, `Removes a note based on it's title`, {
    title: titleOptions
  })
  .help()
  .argv;
let command = argv._[0];
// console.log(`Command: ${command}`);
if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => {
    console.log(`${note.title}: ${note.body}`);
  });
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? `Note ${argv.title} has been removed` : `Note not found`;
  console.log(message);
} else {
  console.log(`Command "${command}" not recognized!`);
}

console.log("Exiting App...");
