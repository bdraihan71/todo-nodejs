const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

//import router
const todoRouter = require('./route/todoRouter')


const app = express()

//middleware array
const middleware = [
    morgan('dev'),
    express.urlencoded({ extended: true }),
    express.json(),
    cors()
]
app.use(middleware)


// using router
app.use('/todo', todoRouter)
app.get('*', (req, res) => {
    res.json({
        message: 'Please use the correct Route'
    })
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/todo');
}

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})