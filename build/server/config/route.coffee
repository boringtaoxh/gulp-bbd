mongoose = require 'mongoose'
Product = mongoose.model 'Product'
productsData = require('../data/products')

###collection = [
  {
    'title': 'C# for Sociopaths'
    'designer': 1
    'published': '2013-10-04T23:00:00.000Z'
    'liked': [1,3]
  },
  {
    'title': 'C# for Sociopaths'
    'designer': 1
    'published': '2013-10-04T23:00:00.000Z'
    'liked': [1,3]
  }
]###


module.exports = (app) ->
  app.get '/api/products', (req, res) ->
  	mongoose.model('Product').find({}).exec (error, collection) ->
    	res.send collection
    return
  app.get '*', (req, res) ->
    res.render 'layout'
    return
  return