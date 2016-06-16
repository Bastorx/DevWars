'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var User = require('./DashBoard/User.jsx');
var Games = require('./DashBoard/Games.jsx');
var AI = require('./DashBoard/AI.jsx');

var DashBoard = React.createClass({
	render: function() {
		return (
			<Layout>
				<div id="content" className="dashboard">
					<div className="container">
						<div className="col-md-6 section">
							<User />
						</div>
						<div className="col-md-6 section">
							<Games />
						</div>
						<div className="col-md-12 section">
							<AI />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}); 

module.exports = DashBoard;