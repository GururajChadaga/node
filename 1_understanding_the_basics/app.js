const http = require('http');

const routes = require('./routes');
// requestServer is called by the createServer whenever a request reaches the server.

// Option 1
// function requrestListener(req, res){}
// const server = http.createServer(requrestListener)

// Option 2
// const server = http.createServer(function(req, res){})

// Option 3
const server = http.createServer(routes.handler);

// listen() does not exit the script, rather, it keeps listening for a requet.
server.listen(3000);
