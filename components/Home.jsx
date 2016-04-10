'use strict';

var React = require('react');
var Header = require('./Layout/Header.jsx');
var Layout = require('./Layout/Layout.jsx');

var Home = React.createClass({
	render: function() {
		return (
			<Layout>
				<div id="content" className="home">
				</div>
			</Layout>
		);
	}
});


module.exports = Home;