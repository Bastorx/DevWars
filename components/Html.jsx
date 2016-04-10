'use strict';

var React = require('react');

var oldBrowserHtml = '<!--[if lt IE 9]> \
        <p className="browsehappy"> \
            You are using an <strong>outdated</strong> browser. \
            Please <a href="http://browsehappy.com/">upgrade your browser</a> \
            to improve your experience. \
        </p> \
    <![endif]-->';

var Html = React.createClass({
	render: function() {
		if (process.env['NODE_ENV'] == 'full' || process.env['NODE_ENV'] == 'production') {
			var css = '/css/style.min.css';
			var app = '/build/js/app.min.js';
		}
		else {
			var css = '/css/style.css';
			var app = '/build/js/app.js';
		}

		return (
			<html lang="fr">
				<head>
					<title>Bastien Chevallier *Développeur*</title>
					<meta charSet="utf-8" />
					<meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
					<meta httpEquiv="Content-style-type" content="text/css" />
					<meta httpEquiv="Content-language" content="fr" />
					<meta name="title" content="DevWars" />
					<meta name="author" content="Bastien CHEVALLIER / Adrien ALEXANDRE / Romain COURGEY" />
					<meta name="description" content="DevWars s'inspire du jeu FightCode.com tout en s'en éloignant. En effet il a beaucoup de spécificité, le jeu n'est pas limité en 1v1 ainsi 2 équipes de développeurs peuvent programmer leurs IAs et s'affronter dans un combat épique !
D'autre part DevWars s'inspire de certains codes du monde RPG avec notamment un système de classe. Ainsi une entité peut soigner un allié, ou attaquer ses ennemis selon sa classe.
Il faut donc repenser son IA dans certains cas. L'univers DevWars est futuriste et s'inspire de la culture geek. Il existera au moins 2 classements, un classement 1 vs 1, un classement Team visible par pays/continent/monde.
Nous comptons faire de ce classement une référence pour le recrutement. Pour les sociétés cherchant la perle des perles des développeurs. Ainsi il sera possible de lier ses comptes LinkedIn par exemple.
À vos claviers, prêt ? Partez !" />
					<meta name="keywords" content="DevWars, dev, wars, space, developper" />
					<meta name="content-language" content="fr" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
					<link rel="stylesheet" href={css} />
                	<link href="/components/blueimp-gallery/css/blueimp-gallery.min.css" rel="stylesheet" type="text/css" />
				</head>
				<body>
					<div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}} />
                	<div className="oldBrowser" dangerouslySetInnerHTML={{__html: oldBrowserHtml}} />

                	<script dangerouslySetInnerHTML={{__html: this.getStateScript()}}></script>
                	<script src="/components/jquery/dist/jquery.min.js"></script>
                	<script src="/components/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
                	<script src="/components/blueimp-gallery/js/jquery.blueimp-gallery.min.js"></script>
                	<script src={app}></script>
				</body>
			</html>
		);
	},
    getStateScript: function () {
        return 'window.App = '+JSON.stringify(this.props.state)+';';
    }
});


module.exports = Html;