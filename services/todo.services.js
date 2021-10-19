const Todo = require('../models/todo');

class TodoService{
    
    findALL = async () => await Todo.find();

    findById = async (id) => {
        return await Todo.findById(id);
    }

    createTodo = async (todo) => {
        return await Todo.create(todo);
    }

    putTodo = async (id, todo) => {
        return await Todo.updateOne({ _id: id}, todo);
    }

    deleteTodo = async (id) => {
        return await Todo.deleteOne({ _id: id});
    }

}

module.exports = TodoService;