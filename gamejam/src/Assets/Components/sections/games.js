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
    //document.getElementById("gamedetails").style.visibility = 'hidden';
    $(".gamedetails").css({"visibility": "hidden", "opacity": "0"});
    $(".gamedetails").removeClass("visible");
    $(".gamedetails").addClass("hidden");
  }

  fillGameCarousel(id){
    var m = jsonData.games[id].images;
    console.log(m);
    for(var i=0 ; i< m.length ; i++) {
      $('<div id="gameimage'+i+'" class="carousel-item gamecarouselitem"><img src="'+m[i].url+'"></div>').appendTo('.gamecarousel');
    }
    $('.gamecarouselitem').first().addClass('active');
    for(var i=0 ; i< m.length ; i++) {
      $('<img id="'+i+'" class="img-thumbnail" src="'+m[i].url+'">').appendTo('.gameimageset');
      $('.img-thumbnail').on("click", function(){
        var imgId = $(this).attr('id');
        $('.gamecarousel').find('.active').removeClass('active');
        $('.gamecarousel').find("#gameimage"+imgId).addClass('active');
      });
    }
  }
  showGamesection(id){
    if ($('.gamedetails').hasClass('hidden')){
      $(".gamecarousel").empty();
      $(".gameimageset").empty();
      $('.gamedetails').removeClass('hidden');
      $('.gamedetails').addClass("visible");
      $(".gamedetails").css({"visibility": "visible", "opacity": "1"});
      document.getElementById("gametitle").innerHTML = jsonData.games[id].title;
      this.fillGameCarousel(id);
      document.getElementById("gamedescription").innerHTML = jsonData.games[id].description;
      document.getElementById("teamname").innerHTML = jsonData.games[id].teamname;
      document.getElementById("teammembers").innerHTML = jsonData.games[id].teammembers;
    }

  else if ($('.gamedetails').hasClass('visible')){
      $(".gamecarousel").empty();
      $(".gameimageset").empty();
      console.log("clicking when not hidden");
      document.getElementById("gametitle").innerHTML = jsonData.games[id].title;
      document.getElementById("gamedescription").innerHTML = jsonData.games[id].description;
      this.fillGameCarousel(id);
      document.getElementById("teamname").innerHTML = jsonData.games[id].teamname;
      document.getElementById("teammembers").innerHTML = jsonData.games[id].teammembers;
    }
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
                 <div id="001" onClick={() => this.showGamesection(0)} className="col-md-6 game container">
                 <img className="image" src={Catharsis} alt="" />
                 <div className="middle"><div className="text">CATharsis</div></div>
                 </div>
                 <div id="002" onClick={() => this.showGamesection(1)}  className="col-md-6 game container">
                 <img className="image" src={BrutForce} alt="" />
                 <div className="middle"><div className="text">Brut Force</div></div>
                 </div>
                </div>
                <div className="row">
                  <div id="003" onClick={() => this.showGamesection(2)}  className="col-md-6 game container">
                  <img className="image" src={Counttown} alt="" />
                  <div className="middle"><div className="text">Counttown</div></div>

                  </div>
                  <div id="004" onClick={() => this.showGamesection(3)} className="col-md-6 game container">
                  <img className="image" src={Kraut} alt="" />
                  <div className="middle"><div className="text">Kraut und Rüben</div></div>
                  </div>
                </div>
                <div className="row">
                   <div id="005" onClick={() => this.showGamesection(4)} className="col-md-6 game container">
                   <img className="image" src={Santa} alt="" />
                   <div className="middle"><div className="text">Santas Dash Driver</div></div>
                   </div>
                   <div id="006" onClick={() => this.showGamesection(5)} className="col-md-6 game container">
                   <img className="image" src={Smash} alt="" />
                   <div className="middle"><div className="text">SMASHTRONAUT</div></div>
                   </div>
                </div>
                <div className="row">
                   <div id="007" onClick={() => this.showGamesection(6)} className="col-md-6 game container">
                   <img className="image" src={YouOnly} alt="" />
                   <div className="middle"><div className="text">YouOnlyDieOnce</div></div>

                   </div>
                   <div id="008" onClick={() => this.showGamesection(6)} className="col-md-6 game container">
                   <img className="image" src={YouOnly} alt="" />
                   <div className="middle"><div className="text">YouOnlyDieOnce</div></div>
                   </div>

                </div>
            </div>
            <div id="gamedetails" className="col-md-5 gamedetails hidden">
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
              <div className="col-md-8 col-md-offset-4 gameimage">
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
            <div className="col-md-12 gameimageset">
            </div>
            <div className="gamedescription">
                <h4>Game description</h4>
                <p id="gamedescription">Description</p>
                <h4 id="teamname">Team name</h4>
                <p className="team" id="teammembers">Team members</p>
                <button type="button" class="btn btn-secondary btn-lg gamedownload">Download</button>

            </div>

            </div>
        </div>
        </div>
    );
  }
}

export default Games;
