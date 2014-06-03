var socketio = require('socket.io');
var http = require('http');

var app = http.createServer(serveHTML);
app.listen(8000);

var io = socketio.listen(app);
io.sockets.on('connection', function onConnection(socket) {
	socket.on('message', function onData(data) {
		io.sockets.emit('newMessage', data);
	});
});

function serveHTML(req, res) {
	require('fs').readFile(__dirname + '/chat.html', function(err, data) {
		if(err) {
			res.writeHead(500);
			res.end('Whops!');
			return;
		}

		res.write(data)
		res.end();
	});
}
