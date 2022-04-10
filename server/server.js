const PORT = 8080;
const http = require('http');
const app = require('./app');

server = http.createServer(app);

server.listen(PORT,()=>{
console.log(`server running on ${PORT}...`);
});

