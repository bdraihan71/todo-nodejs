const Todo = require('../model/Todo')

exports.getAllTodo = async(req, res) =>{
    try{
        let data = await Todo.find()
        res.status(200).json({
            data: data
        })
    }catch(error){
        res.status(400).json({
           message: error.message
        })
    }
}

exports.createTodo = async(req, res) =>{
    let {todo} = req.body
    
    try{
        let data = new Todo({
            todo
        })
        let newTodo = await data.save()
        res.status(200).json({
            message: 'Create a new task',
            data: newTodo
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

exports.updateTodo = async(req, res) =>{
    let id = req.params.id
    let {status} = req.body
    let options = { new: true };
    try{
        let data = await Todo.findByIdAndUpdate(
            id, 
            {$set: {
               status
            }}, 
            options
        )

        res.status(200).json({
            message: 'update task',
            data: data
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

exports.deleteTodo = async(req, res) =>{
    let id = req.params.id
    try{
        let data = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message: 'Delete task',
            data: data
        })
    }catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}
