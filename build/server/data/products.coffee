promise = require 'bluebird'
mongoose = require 'mongoose'

exports.findProducts = (query) ->
	promise.resolve(mongoose.model('Product').find({}).exec())

exports.findProductById = ->
	promise.resolve(mongoose.model('Product').findById('5642f098513b550868224b36').exec())

exports.findProductByTitle = ->
	promise.resolve(mongoose.model('Product').findOne({'title': 'C# for Sociopaths'}).exec())

exports.likeTotal = (product) ->
	product['liked'].length