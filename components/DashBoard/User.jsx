'use strict';

var React = require('react');

var User = React.createClass({
	render: function() {
		return (
			<section id="profile">
				<h2>MY PROFILE</h2>
				<h3>Bastorx</h3>
				<img src="images/bastorx.jpg"/>
				<div className="user-info">
					<p>Email: trololol@test.com</p>
					<p>Elo: 1743</p>
					<p>Rank: 4232</p>
					<p>Ratio (Win / Lost): 52%</p>
				</div>
			</section>
		);
	}
});

module.exports = User;