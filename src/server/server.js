'use strict'
const express = require('express'),
    morgan = require('morgan');
var app = express();
const config = require('config');
const bodyParser = require('body-parser');
const fs = require('fs');
const helmet = require('helmet');
const Promise = require('bluebird');
const path = require('path');
const router = require('../router/router');

const start = (options) => {
    return new Promise((resolve, reject) => {

      app.use(helmet.noCache());
      app.use(helmet.frameguard());

      // log all requests to access.log
      app.use(morgan('common', {
        // create a write stream (in append mode)
        stream:fs.createWriteStream(path.join(options.basePath, 'access.log'), {flags: 'a'}),
        skip: function (req, res) { return res.statusCode < 400 }
      }));
      
      // we add our API's to the express app
      app.use("/api",router.routesEnabled());
      
      // finally we start the server, and return the newly created server 
      const server = app.listen(options.port, () => resolve(server));
    })
  };

  module.exports = Object.assign({}, {start});
//const port = process.env.port || 9000;

