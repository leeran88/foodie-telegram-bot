const sendGenericMessage = require('../message-handlers/send-generic-message');

function start(bot, message) {
    sendGenericMessage(bot, message.chat.id, 'Hi, I\'m Foodie! I can let you know when your food is here! To do so we need be in touch, can you please send me your phone?');
}

module.exports = start;