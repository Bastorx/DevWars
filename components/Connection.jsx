'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var UserActions = require('../actions/UserActions');
var connectToStores = require('fluxible-addons-react/connectToStores');
var Connection = require('./Connection/Connection.jsx');
var Registration = require('./Connection/Registration.jsx');

var Connexion = React.createClass({
	contextTypes: {
		executeAction: React.PropTypes.func
	},
	onReceiveProps: function (nP) {
		console.log(nP);
	},
	render: function() {
		if(this.props.token == undefined) {
			return (
				<Layout>
					<div id="content" className="ConnectUser">
						<div className="col-md-offset-2"> </div>
						<Connection className="col-xs-12 col-md-4"/>
						<Registration className="col-xs-12 col-md-4"/>
					</div>
				</Layout>
			);
		}
		else {
			return (
				<Layout>
				
						VOus etes connectés
				
				</Layout>
			);
		}
		
	}
});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























