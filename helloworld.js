var http = require('http');

function handler(req, res) {
	res.write('Hello, World!');
	res.end();
}

var server = http.createServer(handler);
server.listen(8000);