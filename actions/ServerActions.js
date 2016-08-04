'use strict';

var NavigationActions = require('./NavigationActions');
var Actions = require("../constants/Actions.js");
var q = require("q");

module.exports = {
    initialize: function (context, url) {
      return q.all([
        context.dispatch(Actions.RECEIVE_TOKEN, context.getCookie("token")),
        context.dispatch(Actions.RECEIVE_ME, JSON.parse(context.getCookie("me")))
      ]).then(function() {
        	return context.executeAction(NavigationActions.navigate, { url: url });
      });
    }
};
