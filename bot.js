const Bot = require('node-telegram-bot-api');
const start = require('./message-handlers/handle-start');
const register = require('./message-handlers/handle-register');
const order = require('./message-handlers/handle-order');
const token = process.env.TELEGRAM_TOKEN;

let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in ' + process.env.NODE_ENV + ' mode');

bot.onText(/^/, (message) => {
  if (message.text === '/start') {
      console.log('Handling start message.');
      start(bot, message);
      return;
  }

  if (message.text === '/NotifyMe') {
      console.log('Handling order message.');
      order(bot, message);
      return;
  }

  console.log('Unknown message recieved.');
  bot.sendMessage(message.chat.id, 'Say waaaat?');
});

bot.on('message', (message) => {
  if (typeof (message.contact) !== 'undefined') {
    console.log('Handling register message.');
    register(bot, message);
    return;
  }
});

module.exports = bot;
