const mongoose = require('mongoose');

const todosShema = mongoose.Schema(
    {
        todo: {
            type: String,
            required: [true, "Please enter a TODO task"],
            unique: true,
            trim: true
        },
        priority: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        dueDate: {
            type: Date,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const Todo = mongoose.model("Todo", todosShema);

module.exports = Todo;