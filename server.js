require('node-jsx').install({extension:'.jsx'});

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var express = require('express');
var path = require('path');
var debug = require('debug')('my-application');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var routes = require('./routes.js');
var app = require('./app');
var provideContext  = require('fluxible-addons-react/provideContext');
var server = express();

var ServerActions   = require('./actions/ServerActions');
var Html = provideContext(require('./components/Html.jsx'), require('./context'));

server.set('views', __dirname + '/components');
server.set('view engine', 'jsx');
server.engine('jsx', require('express-react-views').createEngine());

server.use(favicon(__dirname + '/public/images/icons/transportx32.png'));
server.use(logger('dev'));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, 'public')));
server.use(compression());

server.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});

server.use(function(req, res, next) {
    var context = app.createContext({
        req: req,
        res: res
    });
    context.executeAction(ServerActions.initialize, req.url)
        .then(function () {
            var AppComponent = app.getComponent();

            var markup = ReactDOMServer.renderToString(React.createFactory(AppComponent)({
                context: context.getComponentContext()
            }));

            var html = '<!doctype html>'+React.renderToStaticMarkup(React.createFactory(Html)({
                context : context.getComponentContext(),
                state   : app.dehydrate(context),
                markup  : markup
            }));
            res.send(html);
    })
    .catch(function(err){
        console.log('KO', err);
        next(err);
    });
});


/// catch 404 and forwarding to error handler
server.use(function(err, req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    res.write('<h1>404 Error</h1>');
    res.end();
});

/// error handlers
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.write('<h1>Internal Server Error</h1>');
    res.end();
});

server.set('port', process.env.PORT || 3000);

var server = server.listen(server.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});