'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');

var App = React.createClass({
	getInitialState: function() {
		return {
			code: this.props.code || '\/\/DevWars can only understand your SpaceShip\r\n\/\/if its class is called Spaceship\r\nvar Spaceship = function(spaceship) {\r\n\tthis.priorities = [\r\n\t\t\"onScannedSpaceship\",\r\n\t\t\"onSpaceshipCollision\",\r\n\t\t\"onHitByBullet\",\r\n\t\t\"onWallColision\",\r\n\t\t\"onIdle\"\r\n\t];\r\n};\r\n\r\nSpaceship.prototype.onIdle = function(ev) {\r\n    var spaceship = ev.spaceship;\r\n    spaceship.ahead(100);\r\n    spaceship.turn(90);\r\n    spaceship.rotateCannon(360);\r\n\r\n};\r\n\r\nSpaceship.prototype.onScannedRobot = function(ev) {\r\n    var spaceship = ev.spaceship;\r\n    spaceship.fire();\r\n};'
		};
	},
	componentDidMount: function() {
		require('codemirror/mode/javascript/javascript');
		document.getElementsByClassName('CodeMirror')[0].className = "CodeMirror " + (this.props.theme ? ("cm-s-" + this.props.theme) : "cm-s-default");
		this.forceUpdate();
	},
	componentWillReceiveProps: function(np) {
		if (np && np.theme)
			document.getElementsByClassName('CodeMirror')[0].className = "CodeMirror " + (np.theme ? ("cm-s-" + np.theme) : "cm-s-default");
	},
	render: function() {
		var options = {
			lineNumbers: true,
			readOnly: false,
			mode: 'javascript'
		};
		return (
			<div {...this.props}>
				<Codemirror ref="editor"
					value={this.state.code} 
					onChange={this._updateCode} 
					options={options} />
			</div>
		);
	},
	getCode: function() {
		return this.state.code;
	},
	_updateCode: function(newCode) {
		this.setState({
			code: newCode
		});
	}
});

module.exports = App;