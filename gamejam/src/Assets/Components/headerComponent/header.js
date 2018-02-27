import React, { Component } from 'react';
import logo from '../../Resources/Images/Misc/logo.png';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../Resources/Sketches/P5logo'

class Header extends Component {

  render() {
    return (
        <div className="container-fluid header">
          <div className="row">
            <div className="col-md-2">
            <div className="logo"><a href="#home">
                <P5Wrapper sketch={sketch}/>
                </a></div>
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
    );
  }
}



export default Header;
