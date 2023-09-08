const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Just Checking!!!')
});

server.listen(3000, 'localhost', () => {
    console.log('Hello Node on Port 3000');
} );