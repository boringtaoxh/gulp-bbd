var mongoose, promise;

promise = require('bluebird');

mongoose = require('mongoose');

exports.findProducts = function(query) {
  return promise.cast(mongoose.model('Product').find({}).exec());
};

exports.findProductById = function() {
  return promise.cast(mongoose.model('Product').findById('5642f098513b550868224b36').exec());
};

exports.findProductByTitle = function() {
  return promise.cast(mongoose.model('Product').findOne({
    'title': 'C# for Sociopaths'
  }).exec());
};

exports.likeTotal = function(product) {
  return product['liked'].length;
};
