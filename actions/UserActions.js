'use strict';

var Actions = require('../constants/Actions');

module.exports = {
	registration: function(context, params){
		return context.api
			.post("/api/users", params)
			.then(function(data) {
				return context.api
					.post("/api/users/login", {email: data.email, password: params.password})
			})
			.then(function(data){
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			});
	},
	connection: function(context, params) {
		return context.api
			.post("/api/users/login", {email: params.email, password: params.password})
			.then(function(data){
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			});
	}
};