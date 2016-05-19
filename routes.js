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
		title: "Connexion Page",
		path: "/connexion",
		method: "get",
		handler: require("./components/connexion.jsx")
	}
};