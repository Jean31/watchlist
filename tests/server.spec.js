var http = require('http');

var Server = require('../src/server.js');

describe("Tests suite", function() {
  it("should launch server & return statusCode 200", function() {
    server = new Server();
    server.start();	
    http.get('http://localhost:8080', function (response) {
      expect(response.statusCode).toBe(200);
    });
	
    server.stop();
  });

  it("should display watch list", function() {

    server = new Server();
    server.start();
    http.get('http://localhost:8080', function(response) {
      expect(response.statusCode).toBe(200);
    });

    server.stop();
  });
});
