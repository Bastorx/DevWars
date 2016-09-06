'use strict';

var React = require('react');
var Link = require('../Link.jsx');

var Footer = React.createClass({
    render: function () {
        return (
          <div className="row">
            <footer className="footer">
            	<h3>
            		DevWars 2016 ©
            	</h3>
            </footer>
          </div>
        );
    }
});

module.exports = Footer;
