/**
 * The request Handlers
 */

function add() {
	console.log("Request handler 'add' was called.");
}

function list() {
	console.log("Request handler 'list' was called.");
}

exports.add = add;
exports.list = list;