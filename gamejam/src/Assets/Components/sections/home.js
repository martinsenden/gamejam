import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from './logo2.png';
import Slider from 'react-slick';

class Home extends Component {

  render() {
    var opts = {
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0
          }
        };

    var settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    }

    return (

        <div className="container-fluid home">
          <div className="row">
            <div className="col-md-6 offset-md-6 tmpCarousel">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <YouTube videoId="zZm7GixmznU" opts={opts} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src={ logo }/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Matterhorn-600px.jpg"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}




export default Home;
