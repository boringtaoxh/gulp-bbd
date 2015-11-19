'use strict'

describe 'service', ->
  beforeEach module('app')

  it 'should return services', inject (services) ->
    data = services.data()
    data0 = data[0]
    expect(data.length).to.be.equal(2)
    expect(data).to.contain({
      'title': 'C# for Sociopaths'
      'designer': 1
      'published': '2013-10-04T23:00:00.000Z'
      'liked': [1,3]
      'category': 2
    })
    expect(data0.category).to.be.equal(2)
