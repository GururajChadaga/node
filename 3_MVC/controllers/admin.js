const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add Product',
    active: 'add-product',
  });
};

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      docTitle: 'Admin Products',
      active: 'admin-products',
      prods: products,
    });
  });
};
