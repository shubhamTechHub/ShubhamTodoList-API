const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

//@desc Get all todos
//@route GET /api/contact
//@access public
const geTodos = asyncHandler(async (req, res) => {
    const todo = await Todo.find({});
    res.status(200).json(todo);
});

//@desc Create New todos
//@route POST /api/contact
//@access public
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
        dueDate
    });
    res.status(201).json(newTodo);
});

//@desc Get todo
//@route GET /api/contact/:id
//@access public
const getTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    res.status(200).json(todo);
});

//@desc Update todo
//@route PUT /api/contact/:id
//@access public
const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedTodo);
});

//@desc Delete todo
//@route DELETE /api/contact/:id
//@access public
const deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    
    const deletedTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(deletedTodo);
});

module.exports = {geTodos, createTodo, getTodo, updateTodo, deleteTodo};