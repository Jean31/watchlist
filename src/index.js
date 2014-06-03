/**
 * 
 */

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.start;
handle["/add"] = requestHandlers.add;
handle["/list"] = requestHandlers.list;

server.start(router.route, handle);