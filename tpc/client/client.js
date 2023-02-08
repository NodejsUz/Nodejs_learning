const net = require('net');
const fs = require("fs");

const client = net.createConnection({ port: 3000 }, () => {
  client.write('../img/1.png');
});

client.on('data', (data) => {
  fs.writeFileSync('../img/1.png', data);
  console.log('Image received and saved to disk');
});
