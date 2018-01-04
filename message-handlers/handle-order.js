const storage = require('../storage/firebase-storage');
const sendGenericMessage = require('../message-handlers/send-generic-message');

function start(bot, message) {
    addOrder(message);
    const joke = getRandomJoke();
    sendGenericMessage(bot, message.chat.id, 'Roger that.' + '\n\n' + joke);
}

function addOrder(message) {
    const order = {
        userId: message.from.id,
        orderTime: new Date().toJSON(),
        notified: false,
        expiration: getExpiration().toJSON()
    }

    storage.addOrder(order);
}

function getExpiration() {
    const expirationInHours = 3;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationInHours*60*60*1000);

    return expirationDate;
}

function getRandomJoke() {
    const jokes = [
        'If we are not meant to have midnight snacks, why is there a light in the fridge? 🔦',
        'I\'m just a girl standing in front of a salad, asking it to be a donut. 🍩',
        'Q: What did one steak knife say to the other? 🔪' + '\n' + 'A: Look sharp, here comes the meat 🍗',
        'Q: Why did the tomato turn red? 🍅' + '\n' + 'A: Because it saw the salad dressing 👗',
        'Q: What do you call a sleeping pizza? 🍕' + '\n' + 'A: a piZZZZZZa',
        'Skinny people are easier to kidnap.' + '\n' + 'Stay safe, eat cake. 🎂',
        'I like you berry much 🍓 🍒',
        'Q: Why did the cookie go to the hospital? 🏥' + '\n' + 'A: Because he felt crummy 🍪',
        'Turning vegan is a big missed steak. 🥩',
        'I am on a seafood diet. Every time I see food, I eat it. 🍣',
        'Diet Coke: Making people feel better about ordering two Big Macs and a large fry since 1982. 🍔',
        'Remember: You can eat your way out of almost any problem. 🍴',
        'I followed my heart 💗 and it led me to the fridge',
    ];

    const jokeIndex = Math.floor(Math.random() * jokes.length);

    return jokes[jokeIndex];
}

module.exports = start;