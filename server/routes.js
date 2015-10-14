// Load modules

var User      = require('./controller/user'),
  	Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

  { method: 'GET',  path: '/{somethingss*}', config: Static.get },
  { method: 'POST', path: '/user', config: User.create},
  { method: 'GET', path: '/user', config: User.getAll},
  { method: 'GET', path: '/user/{userid}', config: User.getOne},
  { method: 'PUT', path: '/user/{userid}', config: User.update},
  { method: 'DELETE', path: '/user/{userid}', config: User.remove}
];