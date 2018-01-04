function start(bot, message) {
    const chatId = message.chat.id;
    const text = 'Hi, I\'m Foodie!' + '\n' + 'I can let you know when your food is here!' + '\n' + 'To do so, we need be in touch.' + '\n' + 'Please click "Send my phone number" below';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: 'Send my phone number', request_contact: true }]],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(chatId, text, options);
}

module.exports = start;