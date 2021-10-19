const mongoose = require('mongoose');

const TodosService = require('../services/todo.services');

const TodoService = new TodosService();

class TodoController {

    getTodos = async (req, res) => {
        const todo = await TodoService.findALL();
        res.send(todo);
    }

    getTodosById = async (req, res) => {
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(403).send('ID não localizado');
            return
        }

        const todo = await TodoService.findById(id);

        if(!todo) {
            res.status(404).send('Não localizada!');
            return
        }

        res.status(200).send(todo);
    }

    createTodo = async (req, res) => {
        const todo = req.body;
        const todoSalvo = await TodoService.createTodo(todo);
        res.send({message:`Tarefa ${todoSalvo.nome} criada com sucesso!`});
    };

    putTodo = async (req, res) => {
        const id = req.params.id
        const todo = req.body;
        await TodoService.putTodo(id, todo)
        res.send({message: `Tarefa atualizada com sucesso!`});
    }

    deleteTodo = async (req, res) => {
        const id = req.params.id;
        await TodoService.deleteTodo(id)
        res.send({message:`Tarefa deletada com sucesso!`});
    }

}

module.exports = TodoController;