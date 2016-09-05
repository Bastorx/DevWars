'use strict';

var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    render: function () {
        if(this.props.backgroundStyle) {
            return <img ref="image" style={this.getBackgroundStyle()} />
        }
        return <img ref="image" src={this.getSrc()} />
    },
    getBackgroundStyle: function() {
        return {
            backgroundImage: 'url(' + this.getSrc() + ')'
        }
    },
    getSrc: function () {
        return this.props.picture.url;
    }
});
