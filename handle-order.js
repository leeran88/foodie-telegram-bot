function start(bot, message) {
    const chatId = message.chat.id;
    const text = 'If we are not meant to have midnight snacks, why is there a light in the fridge?';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: 'I\'m hungry' }]],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(chatId, text, options).then(function () {

    });
}

module.exports = start;