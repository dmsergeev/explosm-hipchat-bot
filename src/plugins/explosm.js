var http = require('http');
var cheerio = require('cheerio');

module.exports.load = function (bot) {
  bot.onMessage(/^\!explosm.*/i, onMessage);
};

var onMessage = function (channel, from, message, matches) {
  var self = this;

  http.get('http://explosm.net/rcg', function (res) {
    var data = '';
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on('end', function (chunk) {
      $ = cheerio.load(data)
      imageUrl = 'http:' + $('div[id=rcg-comic]').children().attr('src');
      self.message(channel, imageUrl);
    });
  });

  return true;
};