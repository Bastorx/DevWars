'use strict';

var React = require('react');

var img = {
	DPS: {
		1: "/images/spaceship/DPS/1.png",
		2: "/images/spaceship/DPS/2.png",
		3: "/images/spaceship/DPS/3.png",
		4: "/images/spaceship/DPS/4.png"
	},
	TANK: {
		1: "/images/spaceship/DPS/1.png",
		2: "/images/spaceship/DPS/2.png",
		3: "/images/spaceship/DPS/3.png",
		4: "/images/spaceship/DPS/4.png"
	},
	HEALER: {
		1: "/images/spaceship/DPS/1.png",
		2: "/images/spaceship/DPS/2.png",
		3: "/images/spaceship/DPS/3.png",
		4: "/images/spaceship/DPS/4.png"
	}
};


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

		image.src = img.DPS['1'];
		function run(){
			randMove();
			//animation();
			render();

			window.requestAnimationFrame(run);
		}
		function randSpeed(){
			var PosorNeg = Math.floor((Math.random() * 2) + 1);
			if (PosorNeg == 1){;
				return Math.floor((Math.random() * 4));
			}
			else if (PosorNeg == 2){
				return -(Math.floor((Math.random() * 4)));
			}
		}
		function randMove(){
			if (direction == 0) {
				SpeedXplayer1 = randSpeed();
				SpeedYplayer1 = randSpeed();
				direction = 50;
			}
			if (Yplayer1 + SpeedYplayer1 > 0 && Yplayer1 + SpeedYplayer1 < (c.height - 50))
				Yplayer1 += SpeedYplayer1;
			if (Xplayer1 + SpeedXplayer1 > 0 && Xplayer1 + SpeedXplayer1 < (c.width - 50))
				Xplayer1 += SpeedXplayer1;
			direction -= 1;
		}
		function render(){
			ctx.clearRect(0, 0, c.width, c.height);
			ctx.drawImage(image, Xplayer1, Yplayer1, 50, 50);
		}
		/*function animation(){
			var anim = direction % 16;

			if(anim <= 4){
				image.src = "/images/spaceship1/1.png";
			}
			else if (anim > 4 && anim <= 8){
				image.src = "/images/spaceship1/2.png";
			}
			else if (anim > 8 && anim <= 12){
				image.src = "/images/spaceship1/3.png";
			}
			else if (anim > 12){
				image.src = "/images/spaceship1/4.png";
			}
		}*/

		//ctx.fillRect(0, 0, 100, 100);
		run();
	},
	render: function() {
		return (
			<div {...this.props}>
				<canvas id="PlayGround" width="500" height="500"> 
					Texte alternatif pour les navigateurs ne supportant pas Canvas.
				</canvas>
			</div>
		);
	}
});

module.exports = GameGround;