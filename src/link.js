var create = function (title, url) {
  return {
    title: title,
    url: url,
    markAsRead: function () {},
    isRead: function () {return true;}
  }
};

exports.create = create;
