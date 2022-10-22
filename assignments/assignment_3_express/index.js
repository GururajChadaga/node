const http = require('http');

const express = require('express');

const appRoutes = require('./routes/appRoutes');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(appRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3002);
