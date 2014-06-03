var http = require('http');
var url = require('url');
var route = require('./router.js');

var Server = function (port) {
  this.port = port;
};

function start(route, handle) {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	
	route(handle, pathname);
    
	response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, world!\n');
  }

  this.server = http.createServer(onRequest);
  console.log('server started!');
  this.server.listen(8080);
};

function stop() {
  this.server.close();
};


exports.start = start;
exports.stop = stop;
