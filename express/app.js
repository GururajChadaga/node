const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const expressHandlebars = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

// express() returns a function that initialises an object that handles heavy lifting behing the scene
const app = express();
// app.engine(
//   'handlebars',
//   expressHandlebars({
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main-layout',
//   })
// );
// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug'); // works directly as it is built in
app.set('view engine', 'ejs');

// use() is provided by express and allows to add middleware.
// fn passed to use() is executed for every incoming request
// next is a function that allows to continue to the next middleware
// Path by default is '/'
// app.use('/', (req, res, next) => {
//   console.log('In the middleware');
//   next();
// });

//bodyParser.urlencoded() will returns a middleware function which parses the request body and calls next()
app.use(bodyParser.urlencoded({ extended: false }));

// make public folder available by adding it to the static middleware to make it a static folder
app.use(express.static(path.join(rootDir, 'public')));

app.use('/', (req, res, next) => {
  // console.log('This runs for all paths');
  next();
});

// app.use('/add-product', (req, res, next) => {
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'
//   );
// });

// // post() is same as use() but only works for post requests
// app.post('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//   res.send('<h1>Hello from express</h1>');
// });
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
  res.status(404).render('404', { docTitle: 'Page not found' });
});

// app is also a valid request handler
// const server = http.createServer(app);
// server.listen(3000);

//app.listen() internally creates a server and passes itself to it.
app.listen(3000);
