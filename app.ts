import debugServer from 'debug';
const debug = debugServer('demo:server');
import * as http from 'http';
import express from 'express';
import * as path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import route from './server/route/';
import ejs from 'ejs';
import { Server } from "http";

class App {
  private app: express.Application;
  private server: Server; 
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.register();
    this.errorHandler();
    this.logger();
    this.start();
  }

  private register() {
    this.app.use("/", );
  }

  private errorHandler() {}

  private logger() {
    this.server.on("listening", () => {
      console.log("pujunhao: ", port);
    });
  }

  private start() {
    const port = process.env.PORT || 18080
    this.app.set("port", port);
    this.server.listen(port);
  }
}

const app = express();

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  // err.status = 404;
  next(err)
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
});

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

