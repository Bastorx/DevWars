'use strict';

var React = require('react');
var Link = require('../Link.jsx');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Layout = React.createClass({
    render: function () {
        return (
            <div>
            	<div className="background" />
            	<Header />
        			{this.props.children}
                <Footer />
            </div>
        );
    }
});

module.exports = Layout;