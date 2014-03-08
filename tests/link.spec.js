var link = require('../src/link');

describe("link tests", function() {
  it("create a new link containing title", function() {
    var newLink = link.create('website', 'url');
    expect(newLink.title).toBe('website');
  });
  it("create a new link containing url", function() {
    var newLink = link.create('website', 'url');
    expect(newLink.url).toBe('url');
  });
  it("could mark link as read", function() {
    var newLink = link.create('website', 'url');
    newLink.markAsRead();
    expect(newLink.isRead()).toBe(true);
  });      
});

