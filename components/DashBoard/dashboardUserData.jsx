'use strict';

var React = require('react');
var Layout = require('../Layout/Layout.jsx');

var DashBoard = React.createClass({
	render: function() {
		return (
			<Layout>
				<div id="content" className="dashboard1">
					<img src="/images/dashboard/Toad.png" />
				</div>
			</Layout>
		);
	}
});

module.exports = DashBoard;