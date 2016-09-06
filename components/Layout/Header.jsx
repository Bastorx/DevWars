'use strict';

var React = require('react');
var Link = require('../Link.jsx');
var connectToStores = require('fluxible-addons-react/connectToStores');



var Header = React.createClass({
    render: function () {
      console.log("mdr ca marche:", this.props.token);
      if (this.props.token != undefined) {
        return (
          <div className="row">
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
                               <Link route="ranking"> Ranking </Link>
                            </span>
                        </li>
                        <li>
                           <span>
                                <span id="dashboard"/>
                                <Link route="dashboard"> Dashboard </Link>
                            </span>
                        </li>
                        <li>
                           <span> 
                           <span id="connection"/>
                            <Link route="connection"> Login/Logout </Link>
                            </span>
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
          </div>
        );
      }
      else {
        return (
          <div className="row">
            <header className="header col-xs-12">
                <nav className="col-xs-12">
                    <Link route="home">
                        <h1 className="col-xs-3"><span>Dev</span><span>Wars</span></h1>
                    </Link>
                    <ul className="col-xs-8">
                        <li>
                            <span>
                                <span id="play"/>
                                <Link route="connection"> Play </Link>
                            </span>
                        </li>
                        <li>
                            <span>
                               <span id="rank"/>
                               <Link route="ranking"> Ranking </Link>
                            </span>
                        </li>
                        <li>
                           <span>
                                <span id="dashboard"/>
                                <Link route="connection"> Dashboard </Link>
                            </span>
                        </li>
                        <li>
                           <span> 
                           <span id="connection"/>
                            <Link route="connection"> Login/Logout </Link>
                            </span>
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
          </div>
        );
      }
        
    }
});

Header = connectToStores(Header, ['UserStore'], function(context, props){
  return {
    token: context.getStore('UserStore').getToken()
  };
});

module.exports = Header;
