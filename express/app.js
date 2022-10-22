const http = require('http');

const express = require('express');

const app = express(); // express() returns a function that initialises an object that handles heavy lifting behing the scene

const server = http.createServer(app); // app is also a valid request handler

server.listen(3000);
