const PATH = require('path');
const HTTP = require('http');
const EXPRESS = require('express');
const SOCKETIO = require('socket.io');

const PUBLIC_PATH = PATH.join(__dirname, '../public');

const APP = EXPRESS();
let server = HTTP.createServer(APP);
let io = SOCKETIO(server);

const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static(PUBLIC_PATH));

io.on('connection', (socket) => {

    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'tim@tim.com',
        text: 'Hey there!',
        createdAt: new Date()
    });
    // socket.emit('socks', {test: "asdf"});
    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    });

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});

server.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});

console.log(__dirname + '/../public');
console.log(PUBLIC_PATH);