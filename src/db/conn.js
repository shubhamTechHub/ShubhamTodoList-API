const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shreeshubham23:ObxxDUHPBp9BUwnO@cluster0.7l1qvnh.mongodb.net/ShubhamTodoList-API?retryWrites=true&w=majority')
.then(() => {
    console.log('db connection successful');
})
.catch((error) => {
    console.log(`DB Error: ${error}`);
});