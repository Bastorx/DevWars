'use strict';

var React = require('react');


var GameGround = React.createClass({
	componentDidMount: function() {
		var c = document.getElementById("PlayGround");
		var	ctx = c.getContext("2d");
		var	image = new Image();
		var	Yplayer1 = 25;
		var	Xplayer1 = 25;
		var	SpeedXplayer1 = 0;
		var	SpeedYplayer1 = 0;
		var direction = 0;

		document.getElementById("PlayGround").style.backgroundColor = 'rgba(158, 167, 184, 0.2)';
		image.src = "/images/icons/play.png";
		function run(){
			randMove();
			render();

			window.requestAnimationFrame(run);
		}
		function randSpeed(){
			var PosorNeg = Math.floor((Math.random() * 2) + 1);
			if (PosorNeg == 1){;
				return Math.floor((Math.random() * 15));
			}
			else if (PosorNeg == 2){
				return -(Math.floor((Math.random() * 15)));
			}
		}
		function randMove(){
			if (direction == 0) {
				SpeedXplayer1 = randSpeed();
				SpeedYplayer1 = randSpeed();
				direction = 10;
			}
			if (Yplayer1 + SpeedYplayer1 > 0 && Yplayer1 + SpeedYplayer1 < (c.height - 25))
				Yplayer1 += SpeedYplayer1;
			if (Xplayer1 + SpeedXplayer1 > 0 && Xplayer1 + SpeedXplayer1 < (c.width - 25))
				Xplayer1 += SpeedXplayer1;
			direction -= 1;
		}
		function render(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.drawImage(image, Xplayer1, Yplayer1, 15, 15);
		}

		//ctx.fillRect(0, 0, 100, 100);
		run();
	},
	render: function() {
		return (
			<canvas id="PlayGround" width="500" height="500"> 
				Texte alternatif pour les navigateurs ne supportant pas Canvas.
			</canvas>
		);
	}
});

module.exports = GameGround;