const sendGenericMessage = require('../message-handlers/send-generic-message');

function sendNotification(bot, chatId, floor) {
    const message = 'Your food has arrived on #' + floor + ' floor! 🙌🏼🍴';

    sendGenericMessage(bot, chatId, message);
}

module.exports = sendNotification;