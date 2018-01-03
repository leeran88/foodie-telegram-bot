var express = require('express');
var packageInfo = require('./package.json');
var bodyParser = require('body-parser');
var sendNotification = require('./send-notification');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, "0.0.0.0", function () {
  var host = server.address().address;
  var port = server.address().port;
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
    console.log(JSON.stringify(req.body));

    sendNotification(bot, req.body.userId);
    res.sendStatus(200);
  });
};
