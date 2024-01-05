const mongoose = require('mongoose');

const todosSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        todo: {
            type: String,
            required: [true, "Please add the todo task"],
            trim: true
        },
        priority: {
            type: String,
            required: [true, "Please add the priority"],
            trim: true
        },
        status: {
            type: String,
            required: [true, "Please add the status"],
            trim: true
        },
        category: {
            type: String,
            required: [true, "Please add the category"],
            trim: true
        },
        dueDate: {
            type: Date,
            required: [true, "Please add the due date"],
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Todo", todosSchema);