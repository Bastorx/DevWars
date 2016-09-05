'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('../Layout/Layout.jsx');
var UserActions = require('../../actions/UserActions');
var connectToStores = require('fluxible-addons-react/connectToStores');
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

var Connexion = React.createClass({
	_notificationSystem: null,
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	onReceiveProps: function (nP) {
		console.log("coucou");
	},
	render: function() {
		console.log("propregister:", this.props.token);
		return (
			<div className="col-md-4 inscription" ref="inscription" onClick={this.focalisation}>
					<div className="inscription-content col-md-12">
						<div className="title col-md-12">
							<span className="titleText">Registration</span>
						</div>
						<div className="inscription-fields col-md-12">
							<input type="text" placeholder="Email" ref="email" className="col-md-12"/>
							<input type="text" placeholder="Pseudo" ref="pseudo" className="col-md-12"/>
							<input type="password" placeholder="Password" ref="password" className="col-md-12"/>
							<input type="password" placeholder="Password confirm" ref="password2" className="col-md-12"/>
						</div>
						<NotificationSystem ref="notificationSystem" style={style}/>
						<button id="Submit-inscription" onClick={this.submit} className="col-md-12 button-perso">inscription</button>
					</div>
			</div>
		);
	},
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
	submit: function() {
		this.context.executeAction(UserActions.registration, {
			email:this.refs.email.value,
			pseudo:this.refs.pseudo.value,
			password:this.refs.password.value
		});
	},
	focalisation: function(e) {
		$(ReactDOM.findDOMNode(this.refs.inscription)).addClass("active");
		$(".connexion").removeClass("active");
		
	}
});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























