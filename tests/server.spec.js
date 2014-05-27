var request = require('request');

var Server = require('../src/server.js');

describe("Tests suite", function() {
	var returnCode;

	// This test is writing in syntax <2.0
	// TODO !!!
	it("should add element to watch list", function() {
		
		runs(function() {
			
		});
		
		waitsFor(function() {
			
		}, "");
		
		server = new Server();
		server.start();
		console.log('test running');
		request("http://localhost:8080/", function (error, response, body) {
			console.log('request!');
			expect(body).toBe(201);
			done();	

		}, 2000);

	});


	// This test is writing in syntax >=2.0
	// TODO !!!
	xit("should add element to watch list", function(done) {
		server = new Server();
		server.start();
		console.log('test running');
		request("http://localhost:8080/", function (error, response, body) {
			console.log('request!');
			expect(body).toBe(201);
			done();	

		}, 2000);

	});

  xit("should launch server & return statusCode 200", function() {
    server = new Server();
    server.start();	
    http.get('http://localhost:8080', function (response) {
    	console.log("http.get");
    	returnCode = statusCode;
      //expect(response.statusCode).toBe(200);
    });
	waitsFor(function() {
		return returnCode;
	}, "Should be 200", 2000);
    server.stop();
  });
  
  xit("should add element to watch list", function() {
	    server = new Server();
	    server.start();
	    var options = {
	        hostname: 'http://localhost',
	        port: 8080,
	        path: '/add?title=monSite&url=mon.url.fr',
	        method: 'POST'
	    }; 
	    http.request(options, function (response) {
	    	
	      expect(response.statusCode).toBe(201);
	    });
	  });
  
  xit("should display watch list", function() {

    server = new Server();
    server.start();
    http.post('http://localhost:8080/add', function() {
    });
    
    http.get('http://localhost:8080/list', function(response) {
      expect(response.statusCode).toBe(200);
      expect().toBe();
    });

    server.stop();
  });
});
