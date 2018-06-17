'use strict'
var config = require('config');
var Promise = require('bluebird');

const repository = (connection) => {
  
  //const collection = connection.collection(config.database.DBcollection_auth);

  const getUserProfile = () => {
    return new Promise((resolve, reject) => {
    })
  }

  const getUserById = (id) => {
    return new Promise((resolve, reject) => {
    })
  }
  
  // this will close the database connection
  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getUserById,
    getUserProfile,
    disconnect
  })
}

const connect = (connection) => {
  return new Promise((resolve, reject) => {
    if (!connection) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(connection))
  })   
}
// this only exports a connected repo
module.exports = Object.assign({}, {connect})