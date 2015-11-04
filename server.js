var express = require('express')
    http = require('http'),
    path = require('path'),
    app = express(),
    db = require('./server/config/db');

var config = {
  rootPath: __dirname,
  port: process.env.PORT || 3000
}

require('./server/config/express')(app, config);
require('./server/config/route')(app);

http.createServer(app).listen(config.port, function(){
  console.log('Express server running on port ' + config.port);
});

db.connectDB('mongodb://localhost/mean').then(function() {
  console.log('alt db opened');
})