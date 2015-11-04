'user strict'

chai = require 'chai'
expect = chai.expect

chai.should()

isEven = (num) ->
  num % 2 == 0

describe 'num is even', ->
  it 'should return even when num is even', ->
    isEven(4).should.be.true
