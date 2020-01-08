/* eslint-disable no-console */
console.log('Testing');
const Logger = require('./logger');
// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })
/*
    - __dirname --> abolute path to current file
    - __filename --> absolute path + fileName
 */
console.log('dirname', __dirname); // absolute path
console.log('filename', __filename); // absolute path + fileName

const Person = require('./person');
// load local module
const person1 = new Person('John Doe', 30);
person1.greeting();

const logger = new Logger();
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
