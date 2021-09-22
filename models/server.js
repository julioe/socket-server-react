// Servidor de Express
const express = require('express');
//Servidor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //HTTP server
    this.server = http.createServer(this.app);
    // Configuraciones de sockets
    this.io = socketio(this.server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
      /* configuraciones */
    });
  }

  middlewares() {
    //Desplegar el directorio publico
    this.app.use(express.static(path.resolve(__dirname, '../public')));
    //CORS
    this.app.use(cors());
  }
  configurarSockets() {
    new Sockets(this.io);
  }

  //Metodo encargado de inicializar la aplicación
  execute() {
    //Inicializar Middlewares
    this.middlewares();
    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log(
        'Server corriendo en el puerto: ',
        `http://localhost:${this.port}`
      );
    });
  }
}

module.exports = Server;
