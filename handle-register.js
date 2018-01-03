function register(bot, message) {
    const chatId = message.chat.id;
    const text = 'All set! Sign up for notifications by sending "I\'m hungry"';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: 'I\'m hungry' }]],
            resize_keyboard: false,
            one_time_keyboard: true
        }
    };

    bot.sendMessage(chatId, text, options).then(function () {

    });
}

module.exports = register;