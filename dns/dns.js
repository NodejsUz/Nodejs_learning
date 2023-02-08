const dns = require('dns');
const { createServer } = require('dns');

const server = createServer();

server.on('request', (request, response) => {
  const { question } = request;

  // Extract the domain name from the request
  const domain = question[0].name;

  // Custom resolution logic goes here
  if (domain === 'kun.uz') {
    // Resolve example.com to a specific IP address
    response.answer.push({ name: domain, type: 'A', data: '192.168.0.100', ttl: 300 });
  } else {
    // Delegate all other requests to the system DNS resolver
    dns.resolve(domain, (err, addresses) => {
      if (err) {
        response.header.rcode = 'SERVFAIL';
        response.send();
      } else {
        response.answer.push({ name: domain, type: 'A', data: addresses[0], ttl: 300 });
        response.send();
      }
    });
  }
});

server.on('error', (err) => {
  console.error(err);
});

server.serve(53, '0.0.0.0');
