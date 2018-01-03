const storage = require('./firebase-storage');

function register(bot, message) {
    registerUser(message);

    const chatId = message.chat.id;
    const text = 'All set! Sign up for notifications by sending "/NotifyMe"';
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: '/NotifyMe' }]],
            resize_keyboard: false,
            one_time_keyboard: true
        }
    };

    bot.sendMessage(chatId, text, options);
}

function registerUser(message) {
    const user = {
        id: message.from.id,
        phone: message.contact.phone_number,
    }
    storage.registerUser(user);
}

module.exports = register;