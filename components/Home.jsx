'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');
var Carousel = require('./Partial/Carousel.jsx');

var pictures = [
	{
		url: "http://www.monchiotetmoi.com/upload/images/bien-connaitre-mon-chien-pour-bien-le-nourrir.jpg",
		title: "Chien",
		description: "Ceci est un chien"
	},
	{
		url: "http://media.virginradio.fr/article-2505914-fb-f1415609183/chat-mignon-petit-chaton-therapie-detente.jpg",
		title: "Chat",
		description: "Ceci est un petit chat mignon"
	},
	{
		url: "https://az727346.vo.msecnd.net/content/images/hp1-steak.png",
		title: "Steak",
		description: "Ceci est un steak.... Miam"
	},
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