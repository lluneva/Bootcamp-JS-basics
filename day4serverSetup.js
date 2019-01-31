const http = require('http'); // require says- please look for a file http

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    switch (request.url) {
        case '/':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end('Hello World\n');
            break;
        case '/about':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({ message: 'Hello and welcome!' }));
            break;
        case '/contact':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end('You can reach me @ lidia@lidia.lv');
            break;
        default:
        response.statusCode = 404;
        response.end('ooops. Something gone wrong. Page does not exist');
        break;
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

