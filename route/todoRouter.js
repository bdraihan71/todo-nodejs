const router = require('express').Router()

const {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controller/todoController')

router.get('/all', getAllTodo)
router.post('/', createTodo)
router.put('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router