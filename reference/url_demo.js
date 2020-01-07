/* eslint-disable no-console */
const url = require('url');
// Instantiate a url object
const myUrl = new URL('http://mywebstie.com/hello.html?id=100&status=active');

// Serialzed URL
console.log('Serialzed URL', myUrl.href); // http://mywebstie.com/hello.html?id=100&status=active
console.log('Serialzed URL', myUrl.toString()); // http://mywebstie.com/hello.html?id=100&status=active
// Host (root domain)
console.log('Root domain', myUrl.host); // mywebstie.com
// Hostname (does not get port)
console.log('Root domain', myUrl.hostname); // mywebstie.com
// Pathname
console.log('Path name', myUrl.pathname); // /hello.html
// Serialzed query
console.log('Serialzed query', myUrl.search); // ?id=100&status=active
// Params object -> return a Map object (holds key-value pairs )
console.log('Params object', myUrl.searchParams); // { 'id' => '100', 'status' => 'active' }
// Add param
myUrl.searchParams.append('abc', 123);
console.log('Add param', myUrl.searchParams); // { 'id' => '100', 'status' => 'active', 'abc' => '123' }
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
/*
id: 100
status: active
abc: 123 
*/
console.log(typeof myUrl.searchParams);
// Map object is a collection of elements where each element is stored as a key-value pair.
const map1 = new Map();
map1.set('name', 'Yi');
map1.set('gender', 'female');
console.log('map1', map1); // { 'name' => 'Yi', 'gender' => 'female' }
