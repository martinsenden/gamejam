import React, { Component } from 'react';
import logo from '../../Resources/Images/Misc/logo.png';
import Gamesection from './gamesection.js';
import $ from 'jquery';
import Catharsis from '../../Resources/Images/Gameimages/Gamelist/Catharsis.png';
import BrutForce from '../../Resources/Images/Gameimages/Gamelist/BrutForce.png';
import Counttown from '../../Resources/Images/Gameimages/Gamelist/Counttown.png';
import Kraut from '../../Resources/Images/Gameimages/Gamelist/Kraut.png';
import Santa from '../../Resources/Images/Gameimages/Gamelist/Santa.png';
import Smash from '../../Resources/Images/Gameimages/Gamelist/Smash.png';
import YouOnly from '../../Resources/Images/Gameimages/Gamelist/YouOnly.png';
var jsonData = require('../../Resources/Data/games.json');

class Games extends Component {

  hideGamesection(){
    document.getElementById("gamedetails").style.visibility = 'hidden';
  }

  showGamesection(id){
    document.getElementById("gamedetails").style.visibility = 'visible';
    console.log(jsonData.games[id].title);
    document.getElementById("gametitle").innerHTML = jsonData.games[id].title;
    //document.getElementById("gameimage").src = jsonData.games[id].images[0];
    document.getElementById("gamedescription").innerHTML = jsonData.games[id].description;
    document.getElementById("teammembers").innerHTML = jsonData.games[id].teammembers;

  }

  render() {

    return (
        <div className="container-fluid">
        <div className="row games">
        <div className="col-offset-1"></div>
          <div className="col-md-6 gamelist">
                <h1 className="title">Games</h1>
                <div className="row">
                 <div id="001" className="col-md-6 game">
                 <img onClick={() => this.showGamesection(0)} src={Catharsis} alt="" />
                 <div className="overlay">Game name</div>
                 </div>
                 <div id="002" className="col-md-6 game">
                 <img onClick={() => this.showGamesection(1)} src={BrutForce} alt="" />
                 <div className="overlay">Game name</div>
                 </div>
                </div>
                <div className="row">
                  <div id="003" className="col-md-6 game">
                  <img onClick={() => this.showGamesection(2)} src={Counttown} alt="" />
                  <div className="overlay">Game name</div>
                  </div>
                  <div id="004" className="col-md-6 game">
                  <img onClick={() => this.showGamesection(3)} src={Kraut} alt="" />
                  <div className="overlay">Game name</div>
                  </div>
                </div>
                <div className="row">
                   <div id="005" className="col-md-6 game">
                   <img onClick={() => this.showGamesection(4)} src={Santa} alt="" />
                   <div className="overlay">Game name</div>
                   </div>
                   <div id="006" className="col-md-6 game">
                   <img onClick={() => this.showGamesection(5)} src={Smash} alt="" />
                   <div className="overlay">Game name</div>
                   </div>
                </div>
                <div className="row">
                   <div id="007" className="col-md-6 game">
                   <img onClick={() => this.showGamesection(6)} src={YouOnly} alt="" />
                   <div className="overlay">Game name</div>
                   </div>
                   <div id="008" className="col-md-6 game">
                   <img onClick={() => this.showGamesection(6)} src={YouOnly} alt="" />
                   <div className="overlay">Game name</div>
                   </div>

                </div>
            </div>
            <div id="gamedetails" className="col-md-5 col-offset-1 gamedetails">
            <br/>
            <div className="row">
                <div className="col-md-5 col-offset-7 gametitle">
                  <h1 id="gametitle"></h1>

                </div>
                <button onClick={this.hideGamesection} type="button">X</button>

            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-8 gameimage">
                <img id="gameimage" src={logo} alt=""></img>
              </div>
            </div>
            <div className="gamedescription">
                <h4>Game description</h4>
                <p id="gamedescription">Description</p>
                <p className="team" id="teammembers">TEAM</p>
                <a className="gamedownload" href="#games">Download</a>

            </div>

            </div>
        </div>
        </div>
    );
  }
}

export default Games;
