function start(bot, message) {
    const chatId = message.chat.id;
    const text = 'Hi, I\'m Foodie! I can let you know when your food is here! To do so we need be in touch, can you please send me your phone?';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: 'Send my phone number', request_contact: true }]],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(chatId, text, options).then(function () {

    });
}

module.exports = start;