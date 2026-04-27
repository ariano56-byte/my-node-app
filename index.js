const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const hostname = '127.0.0.1';
const port = 3000;
const htmlFile = path.join(__dirname, 'wonderxyme.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html' || req.url === '/wonderxyme.html') {
    fs.readFile(htmlFile, (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Server error: unable to load page.');
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(data);
    });
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('404 Not Found');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}`);
});
