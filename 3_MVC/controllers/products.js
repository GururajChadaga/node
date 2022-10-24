const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('add-product', { docTitle: 'Add Product', active: 'add-product' });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', { docTitle: 'Shop', active: 'shop', prods: products });
};
