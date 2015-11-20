var Product, mongoose, productsData;

mongoose = require('mongoose');

Product = mongoose.model('Product');

productsData = require('../services/products');

module.exports = function(app) {

  /*app.get '/api/products', (req, res) ->
    productsData.findProducts().then (collection) ->
      res.send collection
    return
   */
  app.get('*', function(req, res) {
    res.render('layout');
  });
};
