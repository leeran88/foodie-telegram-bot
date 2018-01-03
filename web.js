const express = require('express');
const packageInfo = require('./package.json');
const bodyParser = require('body-parser');
const sendNotification = require('./message-handlers/send-notification');

const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT, "0.0.0.0", function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

module.exports = function (bot) {
  app.post('/' + bot.token, function (req, res) {
    console.log('Message recieved from webhook.');
    console.log(JSON.stringify(req.body));
    
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });

  app.post('/notify', function (req, res) {
    console.log('Notification recieved from web app.');
    console.log(JSON.stringify(req.query));

    sendNotification(bot, req.query.userId);
    res.sendStatus(200);
  });
};
