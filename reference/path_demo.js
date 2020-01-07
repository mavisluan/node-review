/* eslint-disable no-console */
// load core module
const path = require('path');

// Absolute path + fileName
console.log('absolute path+filename', __filename);

// Base file name: -> only fileName
console.log('basename', path.basename(__filename));

// Directory name
console.log('directory name', path.dirname(__filename)); // -> __dirname

// File extension
console.log('file extension', path.extname(__filename)); // .js

// Create path object
console.log('path object', path.parse(__filename));

// Concatenate paths
// ../test/hello.html
console.log('concatenate path', path.join(__dirname, 'test', 'hello.html'));
