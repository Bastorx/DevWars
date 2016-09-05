'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('../Layout/Layout.jsx');
var UserActions = require('../../actions/UserActions');
var connectToStores = require('fluxible-addons-react/connectToStores');
var NotificationSystem = require('react-notification-system');

var Connexion = React.createClass({
	_notificationSystem: null,
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	getInitialState: function() {
		return {
			color: "blue"
		};
	},
	componentDidMount: function() {
		setInterval(function() {
			console.log("test");
			if (this.state.color == "blue")
				this.setState({color: "red"});
			else
				this.setState({color: "blue"});
		}.bind(this), 2000)
	},
	onReceiveProps: function (nP) {
		console.log("coucou");
	},
	render: function() {
		console.log("propconnexion:", this.props.token);
		return (
			<div ref="connection" className="col-md-4 connexion active" onClick={this.focalisation}>
				<div className="connexion-content col-md-12">
					<div className="title col-md-12">
						<span className="titleText" style={{color: this.state.color}}>Login</span>
					</div>
					<div className="connexion-fields col-md-12">
						<input type="text" ref="email" placeholder="Your Email" className="col-md-12"/>
						<input type="password" ref="password" placeholder="Your password" className="col-md-12"/>
					</div>
					<NotificationSystem ref="notificationSystem" />
					<button id="Submit-connexion" className="col-md-12 button-perso" onClick={this.submit}>Login</button>
				</div>
			</div>
		);
	},
	_addNotification: function(event) {
      event.preventDefault();
      this._notificationSystem.addNotification({
        message: 'Notification message',
        level: 'success'
      });
    },
	submit: function() {
		this.context.executeAction(UserActions.connection, {
			email:this.refs.email.value,
			password:this.refs.password.value
		});
		this._addNotification();
	},
	focalisation: function() {
		$(ReactDOM.findDOMNode(this.refs.connection)).addClass("active");
		$(".inscription").removeClass("active");
	}

});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























