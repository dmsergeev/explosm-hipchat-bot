var Bot = require('wobot').Bot;

var b = new Bot({ //need to get this from mike
  jid: '?_?@chat.hipchat.com/bot',
  password: ''
});

b.loadPlugin('explosm', require('./plugins/explosm'));
b.connect();

b.onConnect(function() {
  console.log(' -=- > Connect');
  this.join('????_????@conf.hipchat.com');
});

b.onMessage(function(channel, from, message) {
  console.log(' -=- > ' + from + '@' + channel + ' said: ' + message);
});