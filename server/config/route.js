var Product, mongoose, productsData;

mongoose = require('mongoose');

Product = mongoose.model('Product');

productsData = require('../data/products');


/*collection = [
  {
    'title': 'C# for Sociopaths'
    'designer': 1
    'published': '2013-10-04T23:00:00.000Z'
    'liked': [1,3]
  },
  {
    'title': 'C# for Sociopaths'
    'designer': 1
    'published': '2013-10-04T23:00:00.000Z'
    'liked': [1,3]
  }
]
 */

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
