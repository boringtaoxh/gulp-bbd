'user strict';
var chai, expect, isEven;

chai = require('chai');

expect = chai.expect;

chai.should();

isEven = function(num) {
  return num % 2 === 0;
};

describe('num is even', function() {
  return it('should return even when num is even', function() {
    return isEven(4).should.be["true"];
  });
});
