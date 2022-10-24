const express = require('express');

const router = express.Router();
const users = [];

router.get('/', (_req, res, _next) => {
  res.render('userForm', { active: 'home' });
});

router.post('/add-user', (req, res, _next) => {
  users.push(req.body.name);
  res.redirect('/users');
});

exports.router = router;
exports.users = users;
