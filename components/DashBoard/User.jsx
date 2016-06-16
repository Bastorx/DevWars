'use strict';

var React = require('react');

var User = React.createClass({
	render: function() {
		return (
			<section id="profile">
				<h2>MY PROFILE</h2>
				<h3>Bastorx</h3>
				<img src="images/bastorx.jpg"/>
				<p>Email: trololol@youporn.com</p>
			</section>
		);
	}
});

module.exports = User;