import React, { Component } from 'react';
import logo from '../../Resources/Images/Misc/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid header">
          <div className="row">
            <div className="col-md-4">
                <img className="logo" src={ logo } alt=""/>
            </div>
            <div className="col-md-8">
              <nav className="navigation">
                <ul className="list">
                  <li className="listitem"><a className="link" href="#games">Games</a></li>
                  <li className="listitem"><a className="link" href="#about">About</a></li>
                  <li className="listitem"><a className="link" href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
