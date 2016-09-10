'use strict';

var React = require('react');

var Games = React.createClass({
	render: function() {
		return (
			<section id="games">
				<h2>LAST GAMES PLAYED</h2>
				<section>
					<div className="col-md-6 games">
						<div className="col-md-6 games-info">
							<p>Terminator</p>
							<p>DPS</p>
						</div>
						<div className="col-md-6 games-info">
							<img src="images/spaceship/DPS/1.png"/>
						</div>
					</div>
					<div className="col-md-6 games">
						<div className="col-md-6 games-info2">
							<img src="images/red.png" z-index="-1"/>
							<img src="images/spaceship/DPS/1.png"/>
						</div>
						<div className="col-md-6 games-info2">
							<p>KingKong</p>
							<p>Tank</p>
						</div>
					</div>
				</section>
			</section>
		);
	}
});

module.exports = Games;