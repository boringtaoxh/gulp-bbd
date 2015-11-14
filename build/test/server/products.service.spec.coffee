express = require('express')
app = express()
expect = require('chai').expect
request = require('supertest')

dataSavedProduct = undefined
db = {
  findProducts: ->
    return new Promise (resolve, reject) ->
      resolve ['hi']
  saveProduct: (product) ->
    dataSavedProduct = product
}
productsService = require('../../server/services/products-service')(db, app)

newProduct = {
  'title': 'C# for Sociopaths' 
  'designer': 1
  'published': '2013-10-04T23:00:00.000Z'
  'liked': [1,3]
}

describe 'save services', ->
  it 'should pass the job to the database save', (done) ->
    request(app).post('/api/products').send(newProduct).end (err, res) -> 
      expect(dataSavedProduct).to.deep.equal(newProduct)
      done()
      return
    return
  return


describe 'get services', ->
  it 'should send me a json list of products', (done)->
    mongoose = require 'mongoose'
    request(app).get('/api/products')
    .expect('Content-type', /json/)
    .end (err, res) ->
      expect(res.body).to.be.a('Array')
      done()
      return
    return
  return