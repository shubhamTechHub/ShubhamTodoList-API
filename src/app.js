const express = require('express');
const app = express();
app.use(express.json());

const Todo = require('../src/models/todoModel');
require('../src/db/conn');

const port = process.env.PORT || 3000;

// Testing Network Calls API
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// Add todo document API
app.post('/todos/', async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});


app.listen(port, () => {
    console.log(`Server Running at http://localhost:3000/`);
});