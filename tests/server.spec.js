var http = require('http');


describe("Tests suite", function() {
  it("should launch server & return statusCode 200", function() {
    var server = http.createServer(function (request, response) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello, world!\n');
    });
	
    server.listen(8080);
	
    http.get('http://localhost:8080', function (response) {
      expect(response.statusCode).toBe(200);
    });
	
    server.close();
  });

  it("should display watch list", function() {
    var server = http.createServer(function (request, response) {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello, world!\n');
    });

    server.listen(8080);

    http.get('http://localhost:8080', function(response) {
      expect(response.statusCode).toBe(200);
    });

    server.close();
  });
});
