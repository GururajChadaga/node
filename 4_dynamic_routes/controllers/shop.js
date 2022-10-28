const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      active: 'products',
    });
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  console.log(
    Product.findById(productId, (product) => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: `${product.title} Detail`,
        active: 'products',
      });
    })
  );
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      active: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    active: 'cart',
    pageTitle: 'Your Cart',
  });
};

exports.postCart = (req, res, next) => {
  const proudctId = req.body.productId;

  Product.findById(proudctId, (product) => {
    Cart.addProduct(proudctId, product.price);
  });
  res.redirect('/');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    active: 'orders',
    pageTitle: 'Your Orders',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    active: 'checkout',
    pageTitle: 'Checkout',
  });
};
