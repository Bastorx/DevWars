'use strict';

var createStore = require('fluxible/addons/createStore');
var Actions = require('../constants/Actions');
var makeHandlers = require('../lib/makeHandlers');

module.exports = createStore({
	storeName: "UserStore",
	handlers: makeHandlers({
		onReceiveToken: Actions.RECEIVE_TOKEN
	}),
	initialize: function () {
        this.token = {};
    },
    dehydrate: function () {
        return { token: this.token };
    },
    rehydrate: function (state) {
        this.token = state.token;
    },
    onReceiveToken: function(data){
    	this.token = data.id;
    	this.emitChange();
    },
    getToken: function(){
    	return this.token;
    }
});