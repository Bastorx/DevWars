'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var GameGround = require('./CreationLab/GameGround.jsx');

var Codemirror = require('react-codemirror');


var creationlab = React.createClass({
	componentDidMount: function() {
		require('codemirror/mode/javascript/javascript');
		require('codemirror/mode/xml/xml');
		require('codemirror/mode/markdown/markdown');
	},
	render: function() {
		return (
			<Layout>
				<div id="content" className="creationLab">
					<div className="title">
						<h1>Welcome in your SpaceShip Laboratory</h1>
					</div>
					<div className="lab">
						<GameGround />
						<Codemirror style={{width: '500px', height: '500px'}}
						options={{
		    				mode: 'javascript'
						}} />
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