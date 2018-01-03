const bot = require('./bot');
require('./firebase-init')();
require('./web')(bot);