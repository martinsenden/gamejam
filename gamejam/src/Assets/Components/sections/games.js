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
import ScrollableAnchor from 'react-scrollable-anchor';
var jsonData = require('../../Resources/Data/games.json');


class Games extends Component {

  hideGamesection(){
    document.getElementById("gamedetails").style.visibility = 'hidden';
  }

  fillGameCarousel(id){
    var m = jsonData.games[id].images;
    $(document).ready(function(){
      for(var i=0 ; i< m.length ; i++) {
        if(i===0){
          $('<div className="carousel-item active"><img className="d-block img-fluid" src="'+m[i].url+'">  </div>').appendTo('.gamecarousel');
        } else{
        $('<div className="carousel-item"><img className="d-block img-fluid" src="'+m[i].url+'">  </div>').appendTo('.gamecarousel');
      }
    }
    });
  }

  showGamesection(id){
    document.getElementById("gamedetails").style.visibility = 'visible';
    document.getElementById("gametitle").innerHTML = jsonData.games[id].title;
    this.fillGameCarousel(id);
    document.getElementById("gamedescription").innerHTML = jsonData.games[id].description;
    document.getElementById("teamname").innerHTML = jsonData.games[id].teamname;
    document.getElementById("teammembers").innerHTML = jsonData.games[id].teammembers;

  }



  render() {

    return (
        <div className="container-fluid">
        <div className="row games">
        <div className="col-offset-1"></div>
          <div className="col-md-6 gamelist">
              <ScrollableAnchor id={'games'}>
                <h1 className="title">Games</h1>
              </ScrollableAnchor>
                <div className="row">
                 <div id="001" className="col-md-6 game container">
                 <img className="image" onClick={() => this.showGamesection(0)} src={Catharsis} alt="" />
                 <div onClick={() => this.showGamesection(0)} className="middle"><div onClick={() => this.showGamesection(0)} className="text">CATharsis</div></div>
                 </div>
                 <div id="002" className="col-md-6 game container">
                 <img className="image" onClick={() => this.showGamesection(1)} src={BrutForce} alt="" />
                 <div onClick={() => this.showGamesection(1)} className="middle"><div onClick={() => this.showGamesection(1)} className="text">Brut Force</div></div>
                 </div>
                </div>
                <div className="row">
                  <div id="003" className="col-md-6 game container">
                  <img className="image" onClick={() => this.showGamesection(2)} src={Counttown} alt="" />
                  <div onClick={() => this.showGamesection(2)} className="middle"><div onClick={() => this.showGamesection(2)} className="text">Counttown</div></div>

                  </div>
                  <div id="004" className="col-md-6 game container">
                  <img className="image" onClick={() => this.showGamesection(3)} src={Kraut} alt="" />
                  <div onClick={() => this.showGamesection(3)} className="middle"><div onClick={() => this.showGamesection(3)} className="text">Kraut und Rüben</div></div>
                  </div>
                </div>
                <div className="row">
                   <div id="005" className="col-md-6 game container">
                   <img className="image" onClick={() => this.showGamesection(4)} src={Santa} alt="" />
                   <div onClick={() => this.showGamesection(4)} className="middle"><div onClick={() => this.showGamesection(4)} className="text">Santa's Dash Driver</div></div>
                   </div>
                   <div id="006" className="col-md-6 game container">
                   <img className="image" onClick={() => this.showGamesection(5)} src={Smash} alt="" />
                   <div onClick={() => this.showGamesection(5)} className="middle"><div onClick={() => this.showGamesection(5)} className="text">SMASHTRONAUT</div></div>
                   </div>
                </div>
                <div className="row">
                   <div id="007" className="col-md-6 game container">
                   <img className="image" onClick={() => this.showGamesection(6)} src={YouOnly} alt="" />
                   <div onClick={() => this.showGamesection(6)} className="middle"><div onClick={() => this.showGamesection(6)} className="text">YouOnlyDieOnce</div></div>

                   </div>
                   <div id="008" className="col-md-6 game container">
                   <img className="image" onClick={() => this.showGamesection(6)} src={YouOnly} alt="" />
                   <div onClick={() => this.showGamesection(6)} className="middle"><div onClick={() => this.showGamesection(6)} className="text">YouOnlyDieOnce</div></div>
                   </div>

                </div>
            </div>
            <div id="gamedetails" className="col-md-5 gamedetails">
            <br/>
            <div className="col-md-2 backcontainer">
              <img className="backbutton" onClick={this.hideGamesection} src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E" />
            </div>
            <div className="row">
                <div className="col-md-6 col-offset-6 gametitle">
                  <h1 id="gametitle"></h1>

                </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-8 gameimage">
              <div id="gameCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner gamecarousel" role="listbox">

                </div>
                <a className="carousel-control-prev carousel-control" href="#gameCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next carousel-control" href="#gameCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              </div>
            </div>
            <div className="gamedescription">
                <h4>Game description</h4>
                <p id="gamedescription">Description</p>
                <h4 id="teamname">Team name</h4>
                <p className="team" id="teammembers">Team members</p>
                <a className="gamedownload" href="#games">Download</a>

            </div>

            </div>
        </div>
        </div>
    );
  }
}

export default Games;
