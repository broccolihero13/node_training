const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save something new

let Todo = mongoose.model('Todo', {
  text: {
    require: true,
    type: String
  },
  status: {
    require: true,
    type: String
  },
  completedAt: {
    type: Date
  }
});

let newTodo = new Todo({
  text: "Use all the things",
  status: "In Progress",
  completedAt: new Date()
});

newTodo.save().then((msg)=>{
  console.log(`Saved Todo: ${msg}`);
}).catch((err)=>{console.log(err)});