const express = require('express');
const app = express();

const port = 80;

app.get('/', (req, res) => {
    res.send("<h1>This is my first Express App</h1>");
})

app.listen(port, ()=> {
    console.log(`The application started successfully on port ${port}`);
})