'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./Layout/Layout.jsx');
var GameGround = require('./CreationLab/GameGround.jsx');
var Codemirror = require('./CreationLab/CodeMirror.jsx');

var creationlab = React.createClass({
	getInitialState: function() {
		return {
			theme: 'dracula'
		};
	},
	render: function() {
		return (
			<Layout>
				<div id="content" className="creationLab">
					<div className="title">
						<h1>Welcome in your SpaceShip Laboratory</h1>
					</div>
					<div className="lab container">
						<GameGround />
						<Codemirror style={{height: 500}} theme="dracula" />
					</div>
					<button className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3 buttonSave">
						Save and launch your Spaceship
					</button>
				</div>
			</Layout>
		);
	}
});

module.exports = creationlab;