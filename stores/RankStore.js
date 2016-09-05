'use strict';

var createStore = require('fluxible/addons/createStore');
var Actions = require('../constants/Actions');
var makeHandlers = require('../lib/makeHandlers');

module.exports = createStore({
	storeName: "RankStore",
	handlers: makeHandlers({
		onReceiveRanks: Actions.RECEIVE_RANKS
	}),
	initialize: function () {
        this.ranks = [];
    },
    dehydrate: function () {
        return { ranks: this.ranks};
    },
    rehydrate: function (state) {
        this.ranks = state.ranks;
    },
    onReceiveRanks: function(data){
    	this.ranks = data;
    	this.emitChange();
    },
    getRanks: function(){
    	return this.ranks;
    }
});
