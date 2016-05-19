'use strict';

var React = require('react');
var Layout = require('../Layout/Layout.jsx');
var UserActions = require('../../actions/UserActions');
var connectToStores = require('fluxible-addons-react/connectToStores');

var Connexion = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	onReceiveProps: function (nP) {
		console.log("nP", nP);
	},
	render: function() {
		console.log("props:", this.props);
		return (
			<div className="col-md-6 inscription">
				<div>
					<div className="inscription-content col-md-12">
						<div className="inscription-fields col-md-12">
							Email : <input type="text" ref="email"/>
							Pseudo : <input type="text" ref="pseudo"/>
							Password : <input type="password" ref="password"/>
							Password confirm: <input type="password" ref="password2"/>
						</div>
						<button id="Submit-inscription" onClick={this.submit} className="col-md-12">inscription</button>
					</div>
				</div>
			</div>
		);
	},
	submit: function() {
		this.context.executeAction(UserActions.registration, {
			email:this.refs.email.value,
			pseudo:this.refs.pseudo.value,
			password:this.refs.password.value
		});

	}

});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























