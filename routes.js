module.exports = {
	home: {
		title: "HomePage",
		path: "/",
		method: "get",
		handler: require("./components/Home.jsx")
	},
	dashboard: {
		title: "Dashboard Page",
		path: "/dashboard",
		method: "get",
		handler: require("./components/DashBoard.jsx")
	},
	connexion: {
		title: "Connection Page",
		path: "/connection",
		method: "get",
		handler: require("./components/Connection.jsx")
	},
	play: {
		title: "Play Page",
		path: "/play",
		method: "get",
		handler: require("./components/Play.jsx")
	}
};