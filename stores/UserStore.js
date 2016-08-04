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
    onReceiveToken: function(data){
    	this.token = data.id;
    	this.emitChange();
    },
		onReceiveMe: function(data){
    	this.me = data.me;
    	this.emitChange();
    },
    getToken: function(){
    	return this.token;
    },
		getMe: function() {
			return this.me;
		}
});
