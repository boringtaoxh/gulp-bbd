var Product, mongoose, productsData;

mongoose = require('mongoose');

Product = mongoose.model('Product');

productsData = require('../data/products');

module.exports = function(app) {
  app.get('/api/products', function(req, res) {
    mongoose.model('Product').find({}).exec(function(error, collection) {
      return res.send(collection);
    });
  });
  app.get('*', function(req, res) {
    res.render('layout');
  });
};
