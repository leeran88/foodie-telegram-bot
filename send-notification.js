function sendNotification(bot, userId) {
    const chatId = userId;
    const text = 'Your food is here, bon appetit!';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: '/NotifyMe' }]],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(chatId, text, options);
}

module.exports = sendNotification;