'use strict';

var React = require('react');
var Layout = require('./Layout/Layout.jsx');

var DashBoard = React.createClass({
	render: function() {
		return (
			<Layout>
				<div id="content">
					<div>
						<div className="dashboard1 col-md-6" >
							<div className="col-md-4">
								<img src="/images/dashboard/Avengers.ico" />
							</div>
							<div className="fontsDash white col-md-8" >
								<p className="info">Robin Lequerrec</p>
								<p className="change">RobTheBoss</p>
								<p className="change">Educational Manager</p>
								<p className="change"><a href="#">Modify your password</a> </p>
								<p className="change"><a href="#">Update your profil</a> </p>
							</div>
						</div>
						<div className="dashboard2 col-md-6">
							<video width="720" height="405" controls  poster="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.png">
								<source src="https://www.youtube.com/watch?v=XxVg_s8xAms&t=4601s" type="video/mp4"/>
								Your fights. 
							</video>
						</div>
					</div>
					<div>
						<div className="dashboard3 fontsDash col-md-6">
							<div className="fontsDash col-md-6">
								<p className="rankingFirst white">Ranks</p>
								<p className="rankingSecond green"><a href="#">Ranking International 1v1</a> 121</p>
								<p className="ranking green"><a href="#">Ranking International Team</a> 46</p>		
								<p className="ranking green"><a href="#">Ranking Continental 1v1</a> 620</p>		
								<p className="ranking green"><a href="#">Ranking Continental Team</a> 65</p>		
								<p className="ranking green"><a href="#">Ranking State 1v1</a> 21</p>		
								<p className="ranking green"><a href="#">Ranking State Team</a> 4</p>	
							</div>
							<div className="fontsDash col-md-6">
								<p className="rankingFirst white">Stats</p>
								<p className="rankingSecond green"><a href="#">1v1</a> V: 455 L: 61</p>
								<p className="ranking green"><a href="#">Team</a> V: 123 L: 58</p>
							</div>
						</div>
						<div className="dashboard4 col-md-6">
							<video width="720" height="405" controls  poster="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.png">
								<source src="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.mp4" type="video/mp4"/>
								Your fights. 
							</video>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}); 

module.exports = DashBoard;