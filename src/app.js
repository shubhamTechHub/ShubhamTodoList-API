const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Testing Network Calls API
app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server Running at http://localhost:3000/`);
});