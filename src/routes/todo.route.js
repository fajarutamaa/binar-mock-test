const router = require('express').Router()
const { CreateTodo, ListAllTodo, ViewDetail, DeleteTodo, UpdateTodo } = require('../controllers/todo.controller')
const { Authenticate } = require('../middleware/restrict')
const { CheckTodolist } = require('../middleware/middleware')

router.post('/post', Authenticate, CheckTodolist, CreateTodo)
router.get('/', Authenticate, ListAllTodo)
router.get('/view-detail/:id', Authenticate, ViewDetail)
router.delete('/:id', Authenticate, DeleteTodo)
router.put('/:id', Authenticate, UpdateTodo)

module.exports = router