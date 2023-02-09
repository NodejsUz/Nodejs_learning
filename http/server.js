const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    handleRoot(req, res);
  } else if (req.url === '/about') {
    handleAbout(req, res);
  } else {
    handleNotFound(req, res);
  }
});

function handleRoot(req, res) {
  res.end('This is the root.');
}

function handleAbout(req, res) {
  res.end('This is the about page.');
}

function handleNotFound(req, res) {
  res.writeHead(404);
  res.end('Not Found');
}

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
