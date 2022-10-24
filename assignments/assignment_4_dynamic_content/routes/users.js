const express = require('express');

const usersData = require('../routes/home');

const router = express.Router();

router.get('/users', (_req, res, _next) => {
  res.render('usersList', { users: usersData.users, active: 'users' });
});

exports.router = router;
