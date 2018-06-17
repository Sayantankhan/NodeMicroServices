var config = require('config');
var db_config = config.database;

const dbSettings = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };

const dbUrl = config.database_quick_configuration.db_connect_URL || `mongodb://${db_config.DBuser}:${db_config.DBpassword}@${db_config.DBhost}:${db_config.DBport}/${db_config.DBname}`;
const dbAuth = config.database_credentials;
const dbCollection = config.database_quick_configuration.db_collection_auth || db_config.DBcollection_auth;

module.exports = Object.assign({}, { dbSettings,dbUrl,dbAuth,dbCollection });
  