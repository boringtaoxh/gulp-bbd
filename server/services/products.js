var mongoose, promise;

promise = require('bluebird');

mongoose = require('mongoose');

exports.findProducts = function(query) {
  return promise.resolve(mongoose.model('Product').find({}).exec());
};

exports.findProductById = function() {
  return promise.resolve(mongoose.model('Product').findById('5642f098513b550868224b36').exec());
};

exports.findProductByTitle = function() {
  return promise.resolve(mongoose.model('Product').findOne({
    'title': 'C# for Sociopaths'
  }).exec());
};

exports.saveProduct = function(product) {
  return promise.resolve(mongoose.model('Product').create(product));
};

exports.likeTotal = function(product) {
  return product['liked'].length;
};
