function start(bot, message) {
    const chatId = message.chat.id;
    const text = 'Roger that. I\'ll let you know when your food is here.';

    bot.sendMessage(chatId, text).then(function () {

    });
}

module.exports = start;