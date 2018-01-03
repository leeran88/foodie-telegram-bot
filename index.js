const bot = require('./bot');
require('./storage/firebase-init')();
require('./web')(bot);