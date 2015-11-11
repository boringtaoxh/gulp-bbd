mongoose = require 'mongoose'
Product = mongoose.model 'Product'
productsData = require('../data/products')

module.exports = (app) ->
  app.get '/api/products', (req, res) ->
  	mongoose.model('Product').find({}).exec (error, collection) ->
    	res.send collection
    return
  app.get '*', (req, res) ->
    res.render 'layout'
    return
  return