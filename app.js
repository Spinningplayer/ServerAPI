var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var system = require('systeminformation');
var routes = require('./routes/routes');
var systemController = require('./controllers/systemController');

app.use(express.static(__dirname + '/node_modules'));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

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

module.exports = app;


