'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var GameGround = require('./CreationLab/GameGround.jsx');

var creationlab = React.createClass({
	render: function() {
		return (
			<Layout>
				<div className="titleLab">
					<h1>Welcome in your SpaceShip Laboratory</h1>
				</div>
				<div className="col-md-1"></div>
				<GameGround />
				<textarea id="codeplaceID" type="text" className="col-md-5 codeplace" >
					
				</textarea>
				<div className="col-md-12 button-Lab">
					<button className="button-perso"> Save and launch your Spaceship </button>
				</div>
			</Layout>
		);
	}
});

module.exports = creationlab;