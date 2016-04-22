'use strict';

var React = require('react');
var Link = require('../Link.jsx');

var Header = React.createClass({
    render: function () {
        return (
            <header className="header col-xs-12">
                
                <nav className="col-xs-12">
                    <h1 className="col-xs-3">DevWars</h1>
                    <ul className="col-xs-8">
                        <li className="">
                            <span> <span id="play"> </span> Play </span>
                        </li>
                        <li className="">
                           <span> <span id="rank"> </span> Ranking </span>
                        </li>
                        <li className="">
                           <span> <span id="dashboard"> </span> Dashboard </span>
                        </li>
                        <li className="">
                           <span> <span id="contact"> </span> Contact </span>
                        </li>

                        <li className="socialMedia">
                           <span id="facebook"> </span>
                        </li>
                        <li className="socialMedia">
                           <span id="twitter"> </span>
                        </li>
                        <li className="socialMedia">
                           <span id="linkedin"> </span>
                        </li>

                    </ul>
                </nav>
            </header>
        );
    }
});

module.exports = Header;