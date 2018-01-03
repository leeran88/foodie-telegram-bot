const sendGenericMessage = require('../message-handlers/send-generic-message');

function sendNotification(bot, chatId) {
    const joke = getRandomJoke();
    const message = joke + '\n\n' + 'Your food is here, bon appetit!';

    sendGenericMessage(bot, chatId, message);
}

function getRandomJoke() {
    const jokes = [
        'If we are not meant to have midnight snacks, why is there a light in the fridge?',
        'I\'m just a girl standing in front of a salad, asking it to be a donut.',
        'Q:  What did one steak knife say to the other?' + '\n' + 'A:  Look sharp, here comes the meat.',
        'Q:  Why did the tomato turn red?' + '\n' + 'A:  Because it saw the salad dressing.',
    ];

    const jokeIndex = Math.floor(Math.random() * jokes.length);

    return jokes[jokeIndex];
}

module.exports = sendNotification;