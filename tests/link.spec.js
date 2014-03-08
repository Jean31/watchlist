var link = require('../src/link');

describe("link tests", function() {
  it("create new link", function() {
    var newLink = link.create('website', 'url');
    expect(newLink.title).toBe('website');
  });
        
});

