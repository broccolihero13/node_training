const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save something new

// let Todo = mongoose.model('Todo', {
//   text: {
//     required: true,
//     type: String,
//     minlength: 1,
//     trim: true //get rid of any leading and trailing white space
//   },
//   status: {
//     required: true,
//     type: String,
//     default: "Open"
//   },
//   completedAt: {
//     type: Date,
//     default: null
//   }
// });

// let newTodo = new Todo({
//   text: "        Yes     You      Can         ",
// });

// newTodo.save().then((msg)=>{
//   console.log(`Saved Todo: ${msg}`);
// }).catch((err)=>{console.log(err)});

let User = mongoose.model('Users', {
  username: {
    required: true,
    type: String,
    minlength: 3,
    trim: true
  }, email: {
    required: true,
    trim: true,
    minlength: 1,
    type: String
  }, password: {
    required: false,
    type: String
  }
});

let newUser = new User({
  username: "brock_o_lee",
  email: "abc"
});

newUser.save().then((msg)=>{
  console.log(`Saved User ${msg}`);
}).catch((err)=>{console.log(err)});