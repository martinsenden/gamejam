import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../../Resources/Images/Misc/IMG_9208.jpg';
import slide2 from '../../Resources/Images/Misc/IMG_9213.jpg';
import slide3 from '../../Resources/Images/Misc/IMG_9230.jpg';
import ScrollableAnchor from 'react-scrollable-anchor';


class Home extends Component {

  render() {
    var opts = {
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            width: 1280,
            height: 720
          }
        };

    return (

        <div className="container-fluid home">
          <div className="row">
          <ScrollableAnchor id={'home'}>
          <h4></h4></ScrollableAnchor>

            <div className="col-md-6 offset-md-6 tmpCarousel">
              <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <YouTube className="ytplayer" videoId="M7lc1UVf-VE" opts={opts} />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid carouselImage" src={ slide1 }/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid carouselImage" src={ slide2 }/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid carouselImage" src={ slide3 }/>
                    </div>
                </div>
                <a className="carousel-control-prev carousel-control" href="#myCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next carousel-control" href="#myCarousel" role="button" data-slide="next">
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
