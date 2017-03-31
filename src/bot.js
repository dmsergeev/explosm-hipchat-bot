var Bot = require('wobot').Bot;

var b = new Bot({ //need to get this from mike
  jid: '43641_1760036@chat.hipchat.com',
  password: ''
});

b.loadPlugin('explosm', require('./plugins/explosm'));
b.connect();

b.onConnect(function() {
  console.log(' -=- > Connect');
  this.join('43641_i_cant_even@conf.hipchat.com');
  this.join('43641_team_og@conf.hipchat.com');
});