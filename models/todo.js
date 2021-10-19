const mongoose = require('mongoose');

const todoModel = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    prioridade: { type: String, default:"Low",required:true},
    status: {type:String,required:true},        
    prazo: { type: Date},
    dataCriacao: { type:Date, default:Date.now}
})

const Todo = mongoose.model("Todos",todoModel);

module.exports = Todo;