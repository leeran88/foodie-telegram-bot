const firebase = require('firebase');

function registerUser(user) {
    firebase.database().ref('/users/' + user.id).set(user);
}

function addOrder(order) {
    firebase.database().ref('/orders').push(order);
}

module.exports = {
    registerUser,
    addOrder
}