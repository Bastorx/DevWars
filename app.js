var Fluxible = require('fluxible');
var apiPlugin = require('fluxible-plugin-api');
var _ = require('lodash');
var provideContext = require('fluxible-addons-react/provideContext');
var Promise = require('q');
var config = require('./config');

var Application = provideContext(require('./components/Application.jsx'), require('./context'));

// create new fluxible instance
var app = new Fluxible({
    component: Application
});


app.plug({
    name: 'App',
    plugContext: function (options, context) {
        return {
            plugActionContext: function (actionContext) {
                // TODO: use action utils from fluxible
                actionContext.executeActions = function (actions, done) {
                    return Promise
                        .all(_.map(actions, function (action) {
                            return actionContext.executeAction(action[0], action[1]);
                        }))
                        .then(function () {
                            if (done) done();
                        });
                };
            },
            plugStoreContext: function (storeContext) {
                // allow to execute actions from stores
                storeContext.executeAction = context.executeAction.bind(context);
            }
        }
    }
});

app.plug({
    name: 'ConfigPlugin',
    plugContext: function () {
        return {
            plugStoreContext: function (storeContext) {
                storeContext.config = config;
            },
            plugActionContext: function (actionContext) {
                actionContext.config = config;
            },
            plugComponentContext: function (componentContext) {
                componentContext.config = config;
            }
        };
    },
    dehydrate: function () {
        return { config: config };
    },
    rehydrate: function (state) {
        config = state.config;
    }
});

app.plug(apiPlugin({
    apiUrl: process.env.API_URL
}));

app.plug(require('fluxible-plugin-cookie')());

// register stores
app.registerStore(require('./stores/RouteStore'));
app.registerStore(require('./stores/UserStore'));
app.registerStore(require('./stores/RankStore'));

//app.registerStore(ApplicationStore);

module.exports = app;
