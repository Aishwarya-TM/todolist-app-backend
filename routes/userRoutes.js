const express = require ('express')
const router = express.Router()
const {getAllTodo,addTodo,deleteTodo} = require('../controllers/userController')

router.get('/',getAllTodo)

router.post('/add',addTodo)

router.delete('/:id',deleteTodo)

module.exports = router 