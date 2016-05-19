'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var UserActions = require('../actions/UserActions');
var connectToStores = require('fluxible-addons-react/connectToStores');

var Connexion = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	onReceiveProps: function (nP) {
		console.log(nP);
	},
	render: function() {
		return (
			<Layout>
				<div id="content" className="ConnectUser">
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
					<div className="col-md-6 inscription">
						<div>
							<div className="inscription-content col-md-12">
								<div className="inscription-fields col-md-12">
									Email : <input type="text" ref="emailInscription"/>
									Pseudo : <input type="text" ref="pseudoInscription"/>
									Password : <input type="password" ref="passwordInscription"/>
									Password confirm: <input type="password" ref="password2Inscription"/>
								</div>
								<button id="Submit-inscription" onClick={this.submit} className="col-md-12">inscription</button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		);
	},
	submit: function() {
		this.context.executeAction(UserActions.connexion, {
			email:this.refs.emailInscription,
			pseudo:this.refs.pseudoInscription,
			password:this.refs.passwordInscription
		});

	}

});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























