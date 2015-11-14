'use strict';
describe('service', function() {
  beforeEach(module('app'));
  return it('should return services', inject(function(services) {
    var data;
    data = services.data();
    expect(data.length).to.be.equal(2);
    return expect(data).to.contain({
      'title': 'C# for Sociopaths',
      'designer': 1,
      'published': '2013-10-04T23:00:00.000Z',
      'liked': [1, 3]
    });
  }));
});
