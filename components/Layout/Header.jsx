'use strict';

var React = require('react');
var Link = require('../Link.jsx');

var Header = React.createClass({
    render: function () {
        return (
            <header className="header">
                <h1>DevWars</h1>
                <nav>
                    <ul className="container">
                        <li className="col-xs-3">
                            Home
                        </li>
                        <li className="col-xs-3">
                            Play
                        </li>
                        <li className="col-xs-3">
                            Ranking
                        </li>
                        <li className="col-xs-3">
                            Contact
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
});

module.exports = Header;