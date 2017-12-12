var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var system = require('systeminformation');
var routes = require('./routes/routes');

app.use(express.static(__dirname + '/node_modules'));

io.on('connection', function(cSocket) {
  console.log('Client Connected!');

  client.on('join', function(data) {
    console.log(data);
    cSocket.emit('msg', 'Welcome!');
  })
})

system.currentLoad(data => {
    console.log(typeof data.currentload);
});
routes(app);

server.listen(8080);


