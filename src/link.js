var create = function (title, url) {
  return {
    read: false,
    title: title,
    url: url,
    markAsRead: function () {this.read = true;},
    markAsUnread: function() {this.read = false;},
    isRead: function () {return this.read;}
  }
};

exports.create = create;
