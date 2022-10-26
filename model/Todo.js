const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    todo: {
        type: String,
        trim: true,
        required : true
    },

    status: {
        type: String,
        trim: true,
        default : 'todo'
    }
},{
    timestamps: true
})

const Todo = model('Todo', todoSchema)
module.exports = Todo