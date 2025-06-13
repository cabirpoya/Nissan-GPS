const net = require('net');
const fs = require('fs');
const PORT = 9000; // Change if needed

const server = net.createServer(socket => {
  socket.on('data', data => {
    const line = data.toString().trim();
    console.log('Received:', line);
    // Append to p_data.txt
    fs.appendFile('p_data.txt', line + '\n', err => {
      if (err) console.error('Error writing to file:', err);
    });
  });

  socket.on('end', () => {
    console.log('Connection ended');
  });
});

server.listen(PORT, () => {
  console.log(`GPS server listening on port ${PORT}`);
});