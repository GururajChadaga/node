const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      docTitle: 'All Products',
      active: 'products',
      prods: products,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      docTitle: 'Shop',
      active: 'shop',
      prods: products,
    });
  });
};

exports.getCart = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/cart', {
      docTitle: 'Your cart',
      active: 'cart',
      prods: products,
    });
  });
};

exports.getCheckout = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/checkout', {
      docTitle: 'Checkout',
      active: 'checkout',
      prods: products,
    });
  });
};
