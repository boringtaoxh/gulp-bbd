'use strict'

describe 'service', ->
  beforeEach module('app')

  it 'should return data', inject (services) ->
    data = services.data()
    expect(data.length).to.be.equal(2)
    expect(data).to.contain({
      'title': 'C# for Sociopaths'
      'designer': 1
      'published': '2013-10-04T23:00:00.000Z'
      'liked': [1,3]
    })
