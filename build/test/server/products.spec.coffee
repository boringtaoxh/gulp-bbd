expect = require('chai').expect
mongoose = require 'mongoose'
db = require '../../server/config/db'
Product = require '../../server/models/product'
productsData = require '../../server/services/products'

describe 'get database', ->
  product = []
  products = {}
  before (done) ->
    db.connectDB('mongodb://localhost/products')
    .then productsData.findProducts
    .then (data) ->
      products = data
      return
    .then productsData.findProductById
    .then (data) ->
      product = data
      done()
      return
    return
  after ->
    mongoose.connection.close()
  it 'should never be empty', ->
    expect(products.length).to.be.at.least(1)
    return
  it 'should return the first id', ->
    expect(products[0].id).not.equal(undefined)
    return
  it 'should return one product', ->
    expect(product).not.equal(undefined)
    return
  it 'should return the first id', ->
    expect(product['id']).equal('5642f098513b550868224b36')
    return
  it 'should show like total', ->
    likeTotalCount = productsData.likeTotal(product)
    expect(likeTotalCount).equal(2)
    return
  return

describe 'save database', ->
  product = {
    'title': 'C#### for Sociopaths'
    'designer': 1
    'published': '2013-10-04T23:00:00.000Z'
    'liked': [1,3]
  }
  products = {}

  before (done) ->
    db.connectDB('mongodb://localhost/products')
    .then productsData.saveProduct(product)
    .then productsData.findProducts
    .then (data) ->
      products = data
      done()
      return
    return
  after ->
    mongoose.connection.close()
  it 'should never be empty', ->
    expect(products.length).to.be.at.least(1)
    return
  return