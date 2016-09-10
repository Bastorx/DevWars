'use strict';

var React           = require('react');
var _               = require('lodash');
var connectToStores = require('fluxible-addons-react/connectToStores');


var Rank = React.createClass({
	getInitialState: function() {
		return {
      page: 0
		};
	},
  isActive: function(value) {
    return (this.state.page === value) ? {background: "#888"} : {};
  },
	render: function() {
    console.log(this.props);
    if (!this.props) return null;
    var ranks = [], props = this.props;
    /*switch(props.location) {
      case "state":
        ranks = _.compact(_.map(props.ranks, function(rank){
          if (props.me.country === rank.user.country)
            return (rank);
        }));
        break;
      case "continent":
        ranks = _.compact(_.map(props.ranks, function(rank){
          if (props.me.continent === rank.user.continent)
            return (rank);
        }));
        break;
      case "world": ranks = props.ranks; break;
    }*/
    ranks = props.ranks;
    ranks.sort(function(a, b){return (a.elo < b.elo) ? 1 : ((a.elo > b.elo) ? -1 : 0);})

    var ranksTab = [], paginationSize = 5;
    for (var i = 0, tmp = []; i < ranks.length; i++) {
      tmp.push(ranks[i]);
      if (tmp.length === paginationSize || i === ranks.length - 1) {
        ranksTab.push(tmp);
        tmp = [];
      }
    }

    var jsxRanks = _.map((ranksTab[this.state.page] === undefined) ? ranksTab[0] : ranksTab[this.state.page], function(rank) {
      return (
        <li className="row" key={rank.id}>
          <div className="username col-xs-6"> {rank.user.username} </div>
          <div className="location col-xs-2"> {rank.user.continent} / {rank.user.country} </div>
          <div className="elo col-xs-4"> {rank.elo} </div>
        </li>
      );
    });

		return (
      <div id="ranking">
        <ul id="ranks" className="col-xs-6 col-xs-offset-2">
          {jsxRanks}
        </ul>
        <div id="pagination" className="col-xs-6 col-xs-offset-2">
          {ranksTab.map(function(rankTab, i){
            return (
              <div className="pageNumber" style={this.isActive(i)} key={i} onClick={this.handleClick.bind(null, i)}> {i+1} </div>
            );
          }.bind(this))}
        </div>
      </div>
		);
	},
  handleClick: function(i, e) {
    this.setState({page: i});
  }
});

Rank = connectToStores(Rank, ['RankStore'], function(context, props) {
  return {
    ranks: context.getStore('RankStore').getRanks(),
    me: context.getStore('UserStore').getMe()
  }
})

module.exports = Rank;
