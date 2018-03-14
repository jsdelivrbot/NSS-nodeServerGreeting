const { readFile } = require('fs');
const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
    console.log('Request received for:', req.url);
    readFile("index.html", (err, file)=>{
        if(err) { res.statusCode = 404; res.end() }
        res.end(file);
    });
});

server.listen(8080);