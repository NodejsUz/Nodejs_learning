const net = require('net');
const fs = require('fs');


const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const fileName = data.toString().trim();
    const fileStream = fs.createReadStream(fileName);
    fileStream.pipe(socket);
  });
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});