const PORT = 8080;
const HOST = '0.0.0.0';
const http = require('http');
const app = require('./app');

server = http.createServer(app);

server.listen(PORT,HOST,()=>{
console.log(`server running on ${PORT}... on HOST ${HOST}`);
});

