'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var GameGround = require('./CreationLab/GameGround.jsx');

var creationlab = React.createClass({
	render: function() {
		return (
			<Layout>
				<GameGround />
			</Layout>
		);
	}
});

module.exports = creationlab;