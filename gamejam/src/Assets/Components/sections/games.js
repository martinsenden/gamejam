import React, { Component } from 'react';
import logo2 from './logo2.png';
import Gamesection from './gamesection.js';
class Games extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div class="row games">
          <div class="col-md-6 offset-md-2 gamelist">
                <h1 class="title">Games</h1>
                <div class="row">
                 <div class="col-sm-6 game"><img src= {logo2} class="game1" width="108,42" height="93,71" /></div>
                 <div class="col-sm-6 game"><img src= {logo2} class="game2" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                  <div class="col-sm-6 game"><img src= {logo2} class="game5" width="108,42" height="93,71" /></div>
                  <div class="col-sm-6 game"><img src= {logo2} class="game6" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                   <div class="col-sm-6 game"><img src= {logo2} class="game10" width="108,42" height="93,71" /></div>
                   <div class="col-sm-6 game"><img src= {logo2} class="game11" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                   <div class="col-sm-6 game"><img src= {logo2} class="game10" width="108,42" height="93,71" /></div>
                   <div class="col-sm-6 game"><img src= {logo2} class="game11" width="108,42" height="93,71" /></div>
                </div>
            </div>
            <div class="col-md-4 gameDetails"></div>

        </div>
        </div>
    );
  }
}

export default Games;
