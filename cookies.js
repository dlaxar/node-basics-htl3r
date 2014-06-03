var http = require('http');

function handler(req, res) {
	var eatenCookies = 0;

	var req.headers.cookie.match(/cookies=(\d+)/));

	res.setHeader('Set-Cookie', ['cookies=' + eatenCookies]);

	res.write('You have eaten ' + eatenCookies + ' cookies');

	res.end();
}

var server = http.createServer(handler);
server.listen(8000);