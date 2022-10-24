const http = require('http');
const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const homeData = require('./routes/home');
const usersData = require('./routes/users');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(homeData.router);
app.use(usersData.router);
app.use((_req, res, _next) => {
  res.status(404).render('404', { active: '' });
});

app.listen(3000);
