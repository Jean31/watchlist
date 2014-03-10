var http = require('http');

var Server = function (port) {
  this.port = port;
};

Server.prototype.start = function () {
  function onRequest(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, world!\n');
  }

  this.server = http.createServer(onRequest);

  this.server.listen(8080);
};

Server.prototype.stop = function () {
  this.server.close();
};

module.exports = Server;
