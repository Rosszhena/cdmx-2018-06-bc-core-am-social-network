global.window = global;
global.assert = require('chai').assert;
require('../src/index');
require('./data.spec.js');
