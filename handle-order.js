const storage = require('./firebase-storage');

function start(bot, message) {
    addOrder(message);

    const chatId = message.chat.id;
    const text = 'Roger that. I\'ll let you know when your food is here.';

    bot.sendMessage(chatId, text);
}

function addOrder(message) {
    const order = {
        userId: message.from.id,
    }

    storage.addOrder(order);
}

module.exports = start;