'use strict'
// we load all the depencies we need
const {EventEmitter} = require('events');
const server = require('./src/server/server');
const repository = require('./src/repository/repository');
const config = require('config');
const mediator = new EventEmitter();
const dbConfig = require('./src/connections/connect_db');

// verbose logging when we are starting the server
console.log('--- Application Service ---');
console.log('Connecting to Application ...');

// log unhandled execpetions
process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err);
});
process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err);
});

// event listener when the repository has been connected
mediator.on('db.ready', (conn) => {
  let rep;
  repository.connect(conn)
    .then(repo => {
      console.log('Repository Connected. Starting Server');
      rep = repo;
      return server.start({
        port: config.application.port,
        basePath: __dirname,
        repo
      })
    })
    .then(app => {
      console.log(`Server started succesfully, running on port: ${config.application.port}.`);
      app.on('close', () => {
        rep.disconnect()
      })
    })
});

mediator.on('db.error', (err) => {
  console.error(err);
})

// we load the connection to the repository
dbConfig.connect_to_db(config.dbSettings, mediator);
// init the repository connection, and the event listener will handle the rest
mediator.emit('boot.ready');  