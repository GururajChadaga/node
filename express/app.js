const http = require('http');

const express = require('express');

// express() returns a function that initialises an object that handles heavy lifting behing the scene
const app = express();

// use() is provided by express and allows to add middleware.
// fn passed to use() is executed for every incoming request
// next is a function that allows to continue to the next middleware
app.use((req, res, next) => {
  console.log('In the middleware');
  next();
});

app.use((req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from express</h1>');
});

// app is also a valid request handler
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
