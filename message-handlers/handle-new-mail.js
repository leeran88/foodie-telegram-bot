const storage = require('../storage/firebase-storage');

function start(bot, message) {
    addOrderByMail(message);
}

function addOrderByMail(searsId) {
    const order = {
        searsId: searsId,
        orderTime: new Date().toJSON(),
        notified: false,
        expiration: getExpiration().toJSON()
    };

    storage.addOrder(order);
}

function getExpiration() {
    const expirationInHours = 3;
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + expirationInHours*60*60*1000);

    return expirationDate;
}

module.exports = start;