const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{text: 'First test todo'},{text: 'Second test todo'}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    return Todo.insertMany(todos);
  }).then(()=> done());
});

describe('POST /todos', ()=>{
  it('should create a new todo', (done)=>{
    let text = "abcdefg";

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find({text}).then((allTodos)=>{
        expect(allTodos.length).toBe(1);
        expect(allTodos[0].text).toBe(text);
        done();
      }).catch((err)=>done(err))
    });
  });

  it('should not create a to do and return a bad data response', (done)=>{
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res)=>{
        if(err){
          return done(err);
        }
        Todo.find().then((allTodos)=>{
          expect(allTodos.length).toBe(2);
          done();
        }).catch((err)=>done(err))
      });
  });

  it('should fetch all todos', (done)=>{
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res)=>{
        expect(res.body.todos.length).toBe(2)
      })
      .end((err,res)=>{
        if(err){
          return done(err);
        }
        Todo.find().then((allTodos)=>{
          expect(allTodos.length).toBe(2);
          done()
        }).catch((err)=>done(err));
      });
  })
})