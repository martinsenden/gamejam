import React, { Component } from 'react';
import logo2 from './logo2.png';
import Gamesection from './gamesection.js';
class Games extends Component {

  hideGamesection(){
    document.getElementById("gamedetails").style.visibility = 'hidden';
  }

  showGamesection(){
    document.getElementById("gamedetails").style.visibility = 'visible' ;
    console.log("Trying to show");
  };

  render() {

    return (
        <div className="container-fluid">
        <div class="row games">
        <div class="col-offset-1"></div>
          <div class="col-md-6 gamelist">
                <h1 class="title">Games</h1>
                <div class="row">
                 <div id="001" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game1" width="108,42" height="93,71" /></div>
                 <div id="002" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game2" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                  <div id="003" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game5" width="108,42" height="93,71" /></div>
                  <div id="004" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game6" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                   <div id="005" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game10" width="108,42" height="93,71" /></div>
                   <div id="006" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game11" width="108,42" height="93,71" /></div>
                </div>
                <div class="row">
                   <div id="007" class="col-md-6 game"><img onClick={this.showGamesection} src= {logo2} class="game10" width="108,42" height="93,71" /></div>
                </div>
            </div>
            <div id="gamedetails" class="col-md-5 col-offset-1 gamedetails">
            <br/>
            <div class="row">
                <div class="col-md-5 col-offset-7 gametitle">
                  <h1>Title/</h1>

                </div>
                <button onClick={this.hideGamesection} type="button">X</button>

            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-8 gameimage">
                <img src={logo2}></img>
              </div>
            </div>
            <div class="gamedescription">
                <h4>Game description</h4>
                <p>This game is about a solicitous hen who just wants to keep her eggs warm. But the batteries for the so important heating lamp need to be recharged all the time! But watch out - don't let them in for too long! So this simple task turns into a action-packed adventure full of fun, obstacles and batteries!</p>
                <p class="team">Jacqueline Lowe, Julia Hauptmann, Lukas Paul, Florian Friedrich, 2017</p>
                <a class="gamedownload" href="#games">Download</a>

            </div>

            </div>
        </div>
        </div>
    );
  }
}

export default Games;
