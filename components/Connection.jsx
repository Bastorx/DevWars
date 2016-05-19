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
		return (
			<Layout>
				<div id="content" className="ConnectUser">
					<Connection />
					<Registration />
				</div>
			</Layout>
		);
	}
});

Connexion = connectToStores(Connexion, ['UserStore'], function(context, props){
	return {
		token: context.getStore('UserStore').getToken()
	};
});

module.exports = Connexion;
























