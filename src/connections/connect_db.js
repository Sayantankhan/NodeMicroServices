const mongoose = require('mongoose');
const db_config = require('../config/db_config');

// mongoDB function to connect, open and authenticate
const connect_to_db = (options, mediator) => {
    mediator.once('boot.ready', () => {
      mongoose.connect(db_config.dbUrl,db_config.dbAuth).then(
          (conn)=>{
            mediator.emit('db.ready', conn);
          },
          err=>{
            mediator.emit('db.error', err);
          }
      );
    })
  }
  
  module.exports = Object.assign({}, {connect_to_db});
