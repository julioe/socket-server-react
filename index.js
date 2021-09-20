const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();

// // const app = express();

// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io')(server);
// app.use(express.static(__dirname + '/public'));
// io.on('connection', () => {
//   /* … */
// });
// server.listen(8080, () => {
//   console.log('Server conectado :8080');
// });
