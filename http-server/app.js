const http = require('http');

//server inherits all of EventEmitter's properties
const server = http.createServer();
server.listen(3000);

//handler function
server.on('connection',(socket)=>{
	console.log("New connection.....");
})

console.log('Listening on port 3000.......');