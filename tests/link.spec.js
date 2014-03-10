var Link = require('../src/link');

describe("link tests", function() {
  
  it("create a new link containing title", function() {
    var newLink = new Link('website', 'url');
    expect(newLink.title).toBe('website');
  });
  
  it("create a new link containing url", function() {
    var newLink = new Link('website', 'url');
    expect(newLink.url).toBe('url');
  });

  it("could mark link as read", function() {
    var newLink = new Link('website', 'url');
    newLink.markAsRead();
    expect(newLink.isRead()).toBe(true);
  });

  it("could unmark a reading link", function() {
    var newLink = new Link('website', 'url');
    newLink.markAsRead();
    newLink.markAsUnread();
    expect(newLink.isRead()).toBe(false);
  });      
});

