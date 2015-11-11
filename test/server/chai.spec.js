'user strict';
var chai, expect, isEven, sinon;

chai = require('chai');

sinon = require('sinon');

expect = chai.expect;

describe('sinon test', function() {
  var product;
  product = {};
  beforeEach(function() {
    return product = {
      dropProduct: function(productId, callback) {
        return callback();
      }
    };
  });
  return describe('product.dropProduct', function() {
    return it('should call the callback', function() {
      var callback, called;
      called = false;
      callback = function() {
        return called = true;
      };
      product.dropProduct(1, callback);
      return expect(called).to.be["true"];
    });
  });
});

chai.should();

isEven = function(num) {
  return num % 2 === 0;
};

describe('num even test', function() {
  it('should return true even when num is even', function() {
    return isEven(4).should.be["true"];
  });
  return it('should return false even when num is not even', function() {
    return expect(isEven(5)).to.be["false"];
  });
});

describe('num even test', function() {
  it('should return true even when num is even', function() {
    return isEven(4).should.be["true"];
  });
  return it('should return false even when num is not even', function() {
    return expect(isEven(5)).to.be["false"];
  });
});
