var Link = function (title, url) {
  this.title = title;
  this.url   = url;
  this.read  = false;
}

Link.prototype.markAsRead = function () {
  this.read = true;
};

Link.prototype.markAsUnread = function () {
  this.read = false;
};

Link.prototype.isRead = function () {
  return this.read;
}

module.exports = Link;
