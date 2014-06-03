var http = require('http');

http.createServer(handler).listen(8000);

//               request, response
function handler(req,     res) {
	res.write('Hello, world!');
	res.end();
}