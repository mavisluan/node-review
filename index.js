/* eslint-disable no-shadow */
/* eslint-disable no-console */
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /* Load STATICALLY 
    if (req.url === '/') {
        // Load a page ->  { 'Content-Type': 'text/html' }
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
    // send string content -> { 'Content-Type': 'text/html' }
    if (req.url === '/string') {
        // write to header Content-Type
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // send the content
        res.end('<h1>This is a string</h1>');
    }

    if (req.url === '/about') {
        // Load a page ->  { 'Content-Type': 'text/html' }
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }

    if (req.url === '/api/users') {
        const users = [
            { name: 'Lucy Smith', age: 30 },
            { name: 'John Doe', age: 40 },
        ];
        // send json file ->  { 'Content-Type': 'application/json' }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    */
    // Load DYNAMICALLY
    console.log('requrl', req.url);

    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log('filePath', filePath);

    // Extension of file
    const extname = path.extname(filePath);
    // console.log('extname', extname);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
        default:
            contentType = 'text/html';
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.log('error', err);

            if (err.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
