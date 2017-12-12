var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var system = require('systeminformation');
var routes = require('./routes/routes');
var systemController = require('./controllers/systemController');

app.use(express.static(__dirname + '/node_modules'));

io.on('connection', function(cSocket) {
  console.log('Client Connected!');

  cSocket.on('join', function(data) {
    cSocket.emit('msg', 'Welcome!');
    systemController.getCurrentStats(stats => {
        cSocket.emit('stats', stats);
    });
  });

    setInterval(() => {
        systemController.getCurrentStats(stats => {
            cSocket.emit('stats', stats);
        })
    }, 5000);

});

routes(app);

server.listen(3001);


