const storage = require('../storage/firebase-storage');

function register(bot, message) {
    registerUser(message);
    
    const options = {
        parse_mode: 'Markdown',
        reply_markup: {
            keyboard: [[{ text: '/NotifyMe' }]],
            resize_keyboard: false,
            one_time_keyboard: false
        }
    };

    bot.sendMessage(message.chat.id, 'All set!' + '\n' + 'Sign up for notifications by sending "/NotifyMe"', options);
}

function registerUser(message) {
    const user = {
        id: message.from.id,
        phone: message.contact.phone_number,
    }
    storage.registerUser(user);
}

module.exports = register;