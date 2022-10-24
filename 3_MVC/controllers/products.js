const products = [];

exports.getAddProducts = (req, res, next) => {
  res.render('add-product', { docTitle: 'Add Product', active: 'add-product' });
};

exports.postAddProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', { docTitle: 'Shop', active: 'shop', prods: products });
};

exports.products = products;
