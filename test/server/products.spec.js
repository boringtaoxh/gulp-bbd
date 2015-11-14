var Product, db, expect, mongoose, productsData;

expect = require('chai').expect;

mongoose = require('mongoose');

db = require('../../server/config/db');

Product = require('../../server/models/product');

productsData = require('../../server/services/products');

describe('get database', function() {
  var product, products;
  product = [];
  products = {};
  before(function(done) {
    db.connectDB('mongodb://localhost/products').then(productsData.findProducts).then(function(data) {
      products = data;
    }).then(productsData.findProductById).then(function(data) {
      product = data;
      done();
    });
  });
  after(function() {
    return mongoose.connection.close();
  });
  it('should never be empty', function() {
    expect(products.length).to.be.at.least(1);
  });
  it('should return the first id', function() {
    expect(products[0].id).not.equal(void 0);
  });
  it('should return one product', function() {
    expect(product).not.equal(void 0);
  });
  it('should return the first id', function() {
    expect(product['id']).equal('5642f098513b550868224b36');
  });
  it('should show like total', function() {
    var likeTotalCount;
    likeTotalCount = productsData.likeTotal(product);
    expect(likeTotalCount).equal(2);
  });
});

describe('save database', function() {
  var product, products;
  product = {
    'title': 'C#### for Sociopaths',
    'designer': 1,
    'published': '2013-10-04T23:00:00.000Z',
    'liked': [1, 3]
  };
  products = {};
  before(function(done) {
    db.connectDB('mongodb://localhost/products').then(productsData.saveProduct(product)).then(productsData.findProducts).then(function(data) {
      products = data;
      done();
    });
  });
  after(function() {
    return mongoose.connection.close();
  });
  it('should never be empty', function() {
    expect(products.length).to.be.at.least(1);
  });
});
