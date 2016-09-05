'use strict';

var PageActions = require('./actions/PageActions');

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
	connection: {
		title: "Connection Page",
		path: "/connection",
		method: "get",
		handler: require("./components/Connection.jsx")
	},
	creationlab: {
		title: "Creation Laboratory",
		path: "/creationlab",
		method: "get",
		handler: require("./components/CreationLab.jsx")
	},
	ranking: {
		title: "Ranking",
		path: "/ranking",
		method: "get",
		action: PageActions.loadRanks,
		handler: require("./components/Ranking.jsx")
	}
};
