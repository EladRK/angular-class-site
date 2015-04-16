'use strict';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import devConfg from 'config/development';
// import proConfig from 'config/production';
import testConfig from 'config/testing';

let mixin = {};
if (process.env.NODE_ENV === 'development') {
  mixin = devConfg;
} else if (process.env.NODE_ENV === 'testing') {
  mixin = testConfig;
}

var _ = require('lodash');

let config = {
  env: process.env.NODE_ENV,
  db: {
    seed: false
  },

  roles: {
    admin: true
  },

  port: 4500,
  onStart: function(){
    console.log(`on port: ${this.port}`);
  },

  logging: true,
  secrets: {
    prerender: process.env.PRERENDER_TOKEN,
    jwtSecret: process.env.JWT_SECRET || 'catman',
    salt: 3
  }
};

config = _.merge({}, config, mixin);

export {config};
