'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var Carousel = require('./Partial/Carousel.jsx');

var pictures = [
	{
		url: "/images/banner/1.png",
		title: "Equipe",
		description: "La DevWars compétition continue ! Cette semaine le combat en équipe sont mis en avant ! Alors GO GO GO !"
	},
	{
		url: "/images/banner/2.jpg",
		title: "Problème technique",
		description: "Certains problèmes techniques sont encore présent et notre équipe de développeur tente de les corrigers le plus vite possible"
	}
];

var Home = React.createClass({
	render: function() {
		return (
			<Layout>
				<div id="content" className="home">
					<Carousel pictures={pictures} gallery={true} style={{with: '100vw', height: '500px'}}/>
				</div>
			</Layout>
		);
	}
});


module.exports = Home;