const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', { docTitle: 'Add Product', active: 'add-product' }); // for pug and ejs
  // res.render('add-product', {
  //   docTitle: 'Add Product',
  //   activeAddProduct: true,
  //   formsCss: true,
  // }); //for handlebars
});

// post() is same as use() but only works for post requests
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;