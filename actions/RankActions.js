var Actions = require('../constants/Actions');

module.exports = {
	ranking: function(context, params){
		return context.api
			.get('/api/ranks', params)
			.then(function(data) {
        		return context.dispatch(Actions.RECEIVE_RANKS, data);
			})
	}
};
