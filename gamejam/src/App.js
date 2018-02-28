import React, { Component } from 'react';

import './Assets/CSS/default.min.css';
import Header from './Assets/Components/headerComponent/header.js';
import Home from './Assets/Components/sections/home.js';
import Games from './Assets/Components/sections/games';
import About from './Assets/Components/sections/about';
import Contact from './Assets/Components/sections/contact';
import Burger from './Assets/Components/sections/burger.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />
        <Burger />

        <Games />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
