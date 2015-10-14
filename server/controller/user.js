'use strict';

var Joi = require('joi'),
  Boom = require('boom'),
  User = require('../model/user').User;

exports.getAll = {
  handler: function (request, reply) {
    User.getAllUsers(function(err, user) {
      if (!err) {
          return reply(user);
      } else {
          return reply(Boom.badImplementation(err)); // 500 error
      }
    });
  }
};

exports.getOne = {
  handler: function (request, reply) {
    User.getUser(request.params.userid , function(err, user) {
        if (!err) {
            if(user)
              return reply(user);
            else
              return reply(Boom.badRequest("No user found"));
        } else {
            return reply(Boom.badImplementation(err)); // 500 error
        }
    });
  }
};

exports.create = {
  validate: {
    payload: {
      userId   : Joi.string().required(),
      username  : Joi.string().required(),
      fullname  : Joi.string().required()
    }
  },
  handler: function (request, reply) {
    User.createUser(request.payload, function(err, user) {
        if (!err) {
            return reply(user);
        } else {
             if (11000 === err.code || 11001 === err.code) {
                    return reply(Boom.forbidden("please provide another user id, it already exist"));
            }
            else return reply(Boom.forbidden(err)); // HTTP 403
        }
    });
  }
};

exports.update = {
  validate: {
    payload: {
      username  : Joi.string().required()
    }
  },
  handler: function (request, reply) {
    User.updateUser(request.params.userid, request.payload.username, function(err, user){
      if (!err) {
          if (user)
              return reply("User updated successfully");
          else
              return reply("No such user found");
      } else {
           if (11000 === err.code || 11001 === err.code) {
                  return reply(Boom.forbidden("please provide another user id, it already exist"));
          }
          else return reply(Boom.forbidden(err)); // HTTP 403
      }
    });
  }
};

exports.remove = {
  handler: function (request, reply) {
    User.removeUser(request.params.userid, function(err, user){
        if(!err){
          if(user.result.n) // checks from mongodb response for successfull deletion
              return reply("User deleted successfully");
          else
              return reply("No user found");
        } else {
          return reply(Boom.badRequest("Could not delete user")); 
        }
    });
  }
};
