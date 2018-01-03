const firebase = require('firebase');

function registerUser(user) {
    firebase.database().ref('/users/' + user.id).set(user);
}

// function order(order) {
    // firebase.database().ref('/orders').set(order);
// }

module.exports = {
    registerUser   
}