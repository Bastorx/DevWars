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
                        <li>
                            <Link route="home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                Play
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Ranking
                            </a>
                        </li>
                        <li>
                            <Link route="dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <a href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
});

module.exports = Header;