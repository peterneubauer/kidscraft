process.on('uncaughtException', function (err) {
    console.log("Uncaught Exception", err)
    console.log(err.stack)
});

var express = require('express')
    , http = require('http');
var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use('/', express.static(__dirname + '/public/'));
});

http.createServer(app).listen(app.get('port'), function () {

    console.log("Express server listening on port " + app.get('port'));
});