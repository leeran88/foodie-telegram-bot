const storage = require('../storage/firebase-storage');
const getJoke = require('../message-handlers/joke-box');
const sendGenericMessage = require('../message-handlers/send-generic-message');

function start(bot, message) {
    addOrder(message);
    const joke = getJoke();
    sendGenericMessage(bot, message.chat.id, 'Roger that.' + '\n\n' + joke);
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