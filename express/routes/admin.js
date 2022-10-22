const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// post() is same as use() but only works for post requests
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
