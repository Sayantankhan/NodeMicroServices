var config = require('config');

const serverSetting = {
    port: config.application.port
};

module.exports = Object.assign({}, { serverSetting });