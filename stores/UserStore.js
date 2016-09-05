'use strict';

var createStore = require('fluxible/addons/createStore');
var Actions = require('../constants/Actions');
var makeHandlers = require('../lib/makeHandlers');

module.exports = createStore({
	storeName: "UserStore",
	handlers: makeHandlers({
		onReceiveToken: Actions.RECEIVE_TOKEN,
		onReceiveMe: Actions.RECEIVE_ME
	}),
		initialize: function () {
        this.token = {};
				this.me = {};
    },
    dehydrate: function () {
        return { token: this.token, me: this.me };
    },
    rehydrate: function (state) {
        this.token = state.token;
				this.me = state.me
    },
    onReceiveToken: function(token){
			console.log(token);
    	this.token = token;
    	this.emitChange();
    },
		onReceiveMe: function(me){
			console.log(me);
    	this.me = me;
    	this.emitChange();
    },
    getToken: function(){
    	return this.token;
    },
		getMe: function() {
			return this.me;
		}
});
