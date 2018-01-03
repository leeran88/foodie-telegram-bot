const sendGenericMessage = require('../message-handlers/send-generic-message');

function sendNotification(bot, chatId) {
    sendGenericMessage(bot, chatId, 'Your food is here, bon appetit!');
}

module.exports = sendNotification;