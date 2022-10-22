const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('/users middleware');
  res.send('<h1>In users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.send('<h1>In Home</h1>');
});

app.listen(3001);
