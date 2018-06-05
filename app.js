const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener 
emitter.on('messageLogged', (arg)=>{
	console.log('Listener called', arg);
});

const Logger = require('./logger');
const logger = new Logger();

logger.log('message');