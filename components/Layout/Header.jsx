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
                            <span> <span id="play"/> Play </span>
                        </li>
                        <li className="">
                           <span> <span id="rank"/> Ranking </span>
                        </li>
                        <li className="">
                           <span> 
                                <span id="dashboard"/>
                                <Link route="dashboard"> Dashboard </Link>
                            </span>
                        </li>
                        <li className="">
                            <span>
                               <span id="contact"/>
                               <Link route="connexion"> Connexion </Link>
                            </span>
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