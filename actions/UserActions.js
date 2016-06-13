'use strict';

var Actions = require('../constants/Actions');
var Notif = require

module.exports = {
	registration: function(context, params){
		return context.api
			.post("/api/users", params)
			.then(function(data) {
				return context.api
					.post("/api/users/login", {email: data.email, password: params.password})
			})
			.then(function(data){
				//STOCK COOKIE
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			})
			.fail(function() {
				Notif()
			})
	},
	connection: function(context, params) {
		return context.api
			.post("/api/users/login", {email: params.email, password: params.password})
			.then(function(data){
				//STOCK COOKIE
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			})
			.fail(function() {
				Notif()
			})
	}
};