var Bot = require('wobot').Bot;

var b = new Bot({ //need to get this from mike
  jid: '?_?@chat.hipchat.com/bot',
  password: ''
});

b.loadPlugin('explosm', require('./plugins/explosm'));
b.connect();

b.onConnect(function() {
  console.log(' -=- > Connect');
  this.join('43641_i_cant_even@conf.hipchat.com');
});