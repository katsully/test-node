// ONE
console.log("My socket server is running");

// TWO
var express = require('express');

// make an express application
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

// THREE
var socket = require('socket.io');

// variable to keep track of inputs & outputs
var io = socket(server);

// set up a connection event
// the second parameter is a callback
io.sockets.on('connection', newConnection);

function newConnection(socket){
    // THREE
    // console.log(socket);
    
    // FOUR
    console.log("new connection!" + socket.id);

    // FIVE
    // second parameter is a callback
    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        // console.log(data);
        // send data to other clients
        socket.broadcast.emit('mouse', data);
    }

}