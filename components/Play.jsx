'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');



var Play = React.createClass({
	render: function() {
		var c = document.getElementById("fight_arena");
		var ctx = c.getContext("2d");
		return (
			<Layout>
				<canvas id="fight_arena" width="500" height="500"> 
				</canvas>
			</Layout>
		);
	}
});

module.exports = Play;