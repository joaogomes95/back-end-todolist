const express = require('express');

const TodoController = require('./../controllers/todo.controller');

const router = express.Router();
const TodosController = new TodoController();

//Rota GET requests
router.get('/', TodosController.getTodos);

//Rota GET by ID
router.get('/:id', TodosController.getTodosById);

//Rota POST / Create
router.post('/add', TodosController.createTodo);

//Rota PUT / atualizar
router.put('/:id', TodosController.putTodo);

//Rota DELETE / delete

router.delete('/:id', TodosController.deleteTodo);


module.exports = router;