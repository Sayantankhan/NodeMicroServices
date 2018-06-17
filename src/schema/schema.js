var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var config = require('../config/db_config');

//create a schema
var userProfileSchema = new Schema({
    name : { type: String, required: true},
    password : { type: String},
    email : String,
    gender : String,
    profile : String
},{collection: config.dbCollection});

var UserProfile = mongoose.model('UserProfile',userProfileSchema);

// make this available to our users in our Node applications
module.exports = UserProfile;