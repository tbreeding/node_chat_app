const SOCKET = io();

SOCKET.on('connect', () => {
    console.log('Connected to server.');    
    SOCKET.emit('createMessage', {
        from: 'jen@example.com',
        text: 'Hey, this is Andrew',
        createdAt: new Date(),
    });
});



SOCKET.on('disconnect', () => {
    console.log('Disconnected from server');
});

SOCKET.on('newMessage', (message) => {
    console.log('newMessage', message);
})