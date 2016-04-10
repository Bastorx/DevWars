'use strict';

var React = require('react');
var _ = require('lodash');
var handleHistory = require('fluxible-router').handleHistory;
var connectToStores = require('fluxible-addons-react/connectToStores');

var Application = React.createClass({
    render: function () {
        var Handler = this.props.currentRoute.handler;

        return <Handler />
    }
});

Application = handleHistory(Application);

module.exports = Application;
