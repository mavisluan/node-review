/* eslint-disable no-console */
const os = require('os');
// os module -> information about system and environment

// Platform
console.log('platform', os.platform());

// CPU Arch
console.log('CPU Arch', os.arch());

// CPU Core Info
console.log('CPU Core Info', os.cpus());

// Free memory
console.log('Free memory', os.freemem());

// Total memory
console.log('Total memory', os.totalmem());

// Home dir
console.log('Home directory', os.homedir());

// Uptime
console.log('Uptime', os.uptime());
