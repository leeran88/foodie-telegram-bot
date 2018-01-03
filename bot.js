var Bot = require('node-telegram-bot-api');
var start = require('./handle-start');
var register = require('./handle-register');
var token = process.env.TELEGRAM_TOKEN;

var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.onText(/^/, function (message) {
  if (message.text === '/start') {
      console.log('Handling start message.');
      start(bot, message);
      return;
  }
  if (typeof (message.contact) !== 'undefined') {
      console.log('Handling contact message.');
      register(bot, message);
      return;
  }

  console.log('Unknown message, not handled.');
});

module.exports = bot;
