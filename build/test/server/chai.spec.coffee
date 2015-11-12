'user strict'

chai = require 'chai'
sinon = require 'sinon'
expect = chai.expect


describe 'sinon test', ->
  product = {}

  beforeEach ->
    product =
      dropProduct: (productId, callback) ->
        callback()

  describe 'product.dropProduct', ->
    it 'should call the callback', ->
      called = false
      callback = ->
        called = true
      product.dropProduct(1, callback)
      expect(called).to.be.true

chai.should()

isEven = (num) ->
  num % 2 == 0

describe 'num even test', ->
  it 'should return true even when num is even', ->
    isEven(4).should.be.true
    return
  it 'should return false even when num is not even', ->
    expect(isEven(5)).to.be.false
    return
describe 'num even test', ->
  it 'should return true even when num is even', ->
    isEven(4).should.be.true
    return
  it 'should return false even when num is not even', ->
    expect(isEven(5)).to.be.false
    return

