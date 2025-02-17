// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        console.log('favicon requested');
        return;
    }

    if (req.url == '/comments') {
        if (req.method == 'POST') {
            var body = '';
            req.on('data', function (data) {
                body += data;
            });

            req.on('end', function () {
                var POST = qs.parse(body);
                console.log(POST);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('You posted: ' + POST.comment);
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('You sent a GET request');
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Hello World');
    }
}).listen(8080);

console.log('Server running at http://