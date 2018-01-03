const sendGenericMessage = require('../message-handlers/send-generic-message');

function sendNotification(bot, chatId, floor) {
    const joke = getRandomJoke();
    const message = joke + '\n\n' + 'Your food is on floor '/* + floor*/ + '! :raised_hands: Bon appetit! :fork_and_knife:';

    sendGenericMessage(bot, chatId, message);
}

function getRandomJoke() {
    const jokes = [
        'If we are not meant to have midnight snacks, why is there a light in the fridge :flashlight:?',
        'I\'m just a girl standing in front of a salad, asking it to be a donut. :doughnut:',
        'Q:  What did one steak knife say to the other :hocho:?' + '\n' + 'A:  Look sharp, here comes the meat. :poultry_leg:',
        'Q:  Why did the tomato turn red :tomato:?' + '\n' + 'A:  Because it saw the salad dressing. :dress:',
    ];

    const jokeIndex = Math.floor(Math.random() * jokes.length);

    return jokes[jokeIndex];
}

module.exports = sendNotification;