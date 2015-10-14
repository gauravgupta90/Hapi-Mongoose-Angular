'use strict';

module.exports = {
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  database: {
  	host: '127.0.0.1',
    port: 27017,
    db: 'DatabaseName',
    username: '',
    password: '',
    url : 'mongodb://<user>:<password>@<url>'
  }
};
