const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
//cors --> cross origin resource sharing

const hostname = '127.0.0.1';
// const port = 3000;
var port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('location.json', 'utf-8', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});