expect = require('chai').expect
mongoose = require 'mongoose'
db = require '../../server/config/db'
Product = require '../../server/models/product'
productsData = require '../../server/data/products'

describe 'get data', ->
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