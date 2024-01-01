const express = require('express');
const app = express();
app.use(express.json());

const Todo = require('../src/models/todoModel');
require('../src/db/conn');

const port = process.env.PORT || 3000;

// Testing Network Calls - API
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// create todo - API
app.post('/todos/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// fetch todos - API
app.get('/todos/', async (req, res) => {
    try {
        const todo = await Todo.find({});
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// fetch a todo by ID - API
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// update todo - API
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        if (!todo) {
            res.status(404).json({message: `cannot find any todo with ID ${id}`});
        }
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// delete todo - API
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            res.status(404).json({message: `cannot find any todo with ID ${id}`});
        }
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:3000/`);
});