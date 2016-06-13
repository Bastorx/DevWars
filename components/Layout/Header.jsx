'use strict';

var React = require('react');
var Link = require('../Link.jsx');

var Header = React.createClass({
    render: function () {
        return (
            <header className="header col-xs-12">
                
                <nav className="col-xs-12">
                    <Link route="home"> <h1 className="col-xs-3">DevWars</h1> </Link>
                    <ul className="col-xs-8">
                        <li className="">
                            <span>
                                <span id="play"/>
                                <Link route="creationlab"> Play </Link>
                            </span>
                        </li>
                        <li className="">
                            <span>
                               <span id="rank"/>
                               <Link route="dashboard"> Ranking </Link>
                            </span>
                        </li>
                        <li className="">
                           <span> 
                                <span id="dashboard"/>
                                <Link route="dashboard"> Dashboard </Link>
                            </span>
                        </li>
                        <li className="">
                           <span> <span id="contact"/> Contact </span>
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