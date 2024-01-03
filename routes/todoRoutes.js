const express = require('express');
const router = express.Router();
const {geTodos, createTodo, getTodo, updateTodo, deleteTodo} = require('../controllers/todoController');

router.route('/').get(geTodos).post(createTodo);
router.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;