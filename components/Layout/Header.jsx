'use strict';

var React = require('react');
var Link = require('../Link.jsx');

var Header = React.createClass({
    render: function () {
        return (
            <header className="header col-xs-12">
                <nav className="col-xs-12">
                    <Link route="home"> 
                        <h1 className="col-xs-3"><span>Dev</span><span>Wars</span></h1> 
                    </Link>
                    <ul className="col-xs-8">
                        <li>
                            <span>
                              <span id="play"/>
                              <Link route="creationlab"> Play </Link>
                            </span>
                        </li>
                        <li>
                            <span>
                              <span id="rank"/>
                              <Link route="dashboard"> Ranking </Link>
                            </span>
                        </li>
                        <li>
                           <span> 
                              <span id="dashboard"/>
                              <Link route="dashboard"> Dashboard </Link>
                            </span>
                        </li>
                        <li>
                           <span> <span id="contact"/> Contact </span>
                        </li>

                        <li className="socialMedia">
                           <span id="facebook"/>
                        </li>
                        <li className="socialMedia">
                           <span id="twitter"/>
                        </li>
                        <li className="socialMedia">
                           <span id="linkedin"/>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
});

module.exports = Header;