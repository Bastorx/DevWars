'use strict';

var React = require('react');
var UserActions = require('../../actions/UserActions');

var Connexion = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	onReceiveProps: function (nP) {
		console.log(nP);
	},
	render: function() {
		return (
			<div className="col-md-6 connexion">
				<h1 className="connexion-title">Connexion</h1>
				<div className="connexion-content col-md-12">
					<div className="connexion-fields col-md-12">
						<input type="text" ref="email" placeholder="Your Email" className="col-md-12"/>
						<input type="password" ref="password" placeholder="Your password" className="col-md-12"/>
					</div>
					<button id="Submit-connexion" className="col-md-12 button-perso">Connexion</button>
				</div>
			</div>
		);
	},
	submit: function() {
		this.context.executeAction(UserActions.connection, {
			email:this.refs.email.value,
			password:this.refs.password.value
		});

	}

});

module.exports = Connexion;
























