var Product, db, expect, mongoose, productsData;

expect = require('chai').expect;

mongoose = require('mongoose');

db = require('../../server/config/db');

Product = require('../../server/models/product');

productsData = require('../../server/data/products');

describe('get data', function() {
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
