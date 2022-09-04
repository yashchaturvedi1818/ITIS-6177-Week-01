const http = require('http'); 

http.createServer((request, response) => {
    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    console.log('hello world');

    response.write('Hello, World!\n');

    response.end();

}).listen(1337); 