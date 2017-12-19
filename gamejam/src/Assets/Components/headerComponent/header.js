import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header>
      <div className="header">
        <div className="logo">
          <img src={ logo } alt="" width="151,8" height="131,2"/>
        </div>
        <nav>
          <ul>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        </div>
      </header>
    );
  }
}

export default Header;
