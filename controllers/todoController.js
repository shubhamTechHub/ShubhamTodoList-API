const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

//@desc Get all todos
//@route GET /api/todos
//@access private
const getTodos = asyncHandler(async (req, res) => {
    const todo = await Todo.find({user_id: req.user.id});
    res.status(200).json(todo);
});

//@desc Create New todos
//@route POST /api/todos
//@access private
const createTodo = asyncHandler(async (req, res) => {
    const {todo, priority, status, category, dueDate} = req.body;
    if (!todo || !priority || !status || !category || !dueDate) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const newTodo = await Todo.create({
        todo,
        priority,
        status,
        category,
        dueDate,
        user_id: req.user.id
    });
    res.status(201).json(newTodo);
});

//@desc Get todo
//@route GET /api/todos/:id
//@access private
const getTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }

    if (todo.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user todo");
    }

    res.status(200).json(todo);
});

//@desc Update todo
//@route PUT /api/todos/:id
//@access private
const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }

    if (todo.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update other user todo");
    }
    
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedTodo);
});

//@desc Delete todo
//@route DELETE /api/todos/:id
//@access private
const deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }

    if (todo.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete other user todo");
    }
    
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(deletedTodo);
});

module.exports = {getTodos, createTodo, getTodo, updateTodo, deleteTodo};