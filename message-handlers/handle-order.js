const storage = require('../storage/firebase-storage');
const sendGenericMessage = require('../message-handlers/send-generic-message');

function start(bot, message) {
    addOrder(message);
    sendGenericMessage(bot, message.chat.id, 'Roger that. I\'ll let you know when your food is here.');
}

function addOrder(message) {
    const order = {
        userId: message.from.id,
        orderTime: new Date().toJSON(),
        notified: false,
        expiration: getExpiration().toJSON()
    }

    storage.addOrder(order);
}

function getExpiration() {
    const expirationInHours = 3;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationInHours*60*60*1000);

    return expirationDate;
}

module.exports = start;