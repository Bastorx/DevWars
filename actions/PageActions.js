var Actions = require('../constants/Actions');
var RankActions = require('./RankActions');
var q = require('q');


module.exports = {
  loadRanks: function(context) {
        return context.executeAction(RankActions.ranking);
  }
};
