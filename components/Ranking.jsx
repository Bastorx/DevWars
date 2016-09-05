'use strict';

var React  = require('react');
var Layout = require('./Layout/Layout.jsx');
var Rank   = require('./Ranking/Rank.jsx');
var _      = require('lodash');



var Ranking = React.createClass({
	getInitialState: function() {
		return {
			location: "state"
		};
	},
	render: function() {
		return (
			<Layout>
				<div id="ranking-container" className="row">
					<div id="menu-ranking" className="col-xs-6 col-xs-offset-2">
						<div id="state" onClick={this.handleClick}> State </div>
						<div id="continent" onClick={this.handleClick}> Continent </div>
						<div id="world" onClick={this.handleClick}> World </div>
					</div>
					<Rank location={this.state.location} />
				</div>
			</Layout>
		);
	},
	handleClick: function(e) {
		this.setState({location: e.target.id});
	}
});

module.exports = Ranking;
