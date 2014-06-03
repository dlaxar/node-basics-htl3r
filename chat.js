var socketio = require('socket.io');
var http = require('http');

var app = http.createServer(handler);
app.listen(8000);

var io = socketio.listen(app);
io.sockets.on('connection', function (socket) {
	socket.on('message', function(data) {
		io.sockets.emit('newMessage', data);
	});
});

function handler(req, res) {
	require('fs').readFile(__dirname + '/index.html', function (err, data) {
		if(err) {
			res.writeHead(500);
			res.write('Whoops');
			res.end();
			return;
		}

		res.end(data);
	});
}