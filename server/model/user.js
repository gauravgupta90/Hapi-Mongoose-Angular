'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
  * @module  User
  * @description contain the details of user  
*/

var UserSchema = new Schema({
  
  /** 
    User ID. It can only contain string, is required and unique field which is indexed.
  */
  userId : { type: String, unique: true, required: true },

  /** 
    User Name. It can only contain string, is required field.
  */
  username : { type: String, required: true },

  /** 
    First Name. It can only contain string, is required field.
  */

  firstname : { type: String, required: true },

  /** 
    Last Name. It can only contain string.
  */

  lastname : { type: String }
  
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }    //seting toJSON option on the schema, so that virtual works when it return json data

});

UserSchema.virtual('fullname').get(function() {
  if(this.lastname){
      return this.firstname + ' ' + this.lastname;
  }
  else{
      return this.firstname;
  }
});

UserSchema.statics.getAllUsers= function(callback) {
    this.find({}, callback);
};

UserSchema.statics.getUser= function(userId, callback) {
    this.findOne({'userId': userId}, callback);
};

UserSchema.statics.createUser = function(requestData, callback) {
    this.create(requestData, callback);
};

UserSchema.statics.updateUser = function(userId, username, callback) {
    this.findOneAndUpdate({'userId': userId}, { $set: { 'username': username }}, callback);
};

UserSchema.statics.removeUser = function(userId, callback) {
    this.remove({'userId': userId}, callback);
};

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
    User : user
};