'use strict';

var Actions = require('../constants/Actions');
var NotificationSystem = require('react-notification-system');
var style = {
	  NotificationItem: {
	    DefaultStyle: {
	      padding: '30px',
	      position: "relative",
	      color: "red",
	      width:"100%",
	    }
	  }
};

module.exports = {
	_notificationSystem: null,
	componentDidMount: function() {
    	this._notificationSystem = this.refs.notificationSystem;
  	},
	_addNotification: function(e) {

		if (e) {
	    	e.preventDefault();
	  	}
		this._notificationSystem.addNotification({
	        message: 'Notification message',
	        level: 'error',
	        autoDismiss: 1
	    });
    },
	registration: function(context, params){
		return context.api
			.post("/api/users", params)
			.then(function(data) {
				return context.api
					.post("/api/users/login", {email: data.email, password: params.password})
			})
			.then(function(data){
				var date = new Date();
				date.setTime(date.getTime()+(7*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
				document.cookie = "SessionCookie="+data.id+expires+"; path=/";
				console.log(data.id);
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			}).catch(function() {
				this._addNotification();
			});
	},
	connection: function(context, params) {
		return context.api
			.post("/api/users/login", {email: params.email, password: params.password})
			.then(function(data){
				var date = new Date();
				date.setTime(date.getTime()+(7*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
				document.cookie = "SessionCookie="+data.id+expires+"; path=/";
				console.log(data.id);
				return context.dispatch(Actions.RECEIVE_TOKEN, data);
			})
			.catch(function() {
				Notif()
				context.setCookie("token", data.id);
				context.setCookie("me", JSON.stringify(data.me));

				context.dispatch(Actions.RECEIVE_ME, data.me);
				return context.dispatch(Actions.RECEIVE_TOKEN, data.id);
			})
	}};
