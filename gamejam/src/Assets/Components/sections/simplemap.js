import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../../Resources/Images/Misc/logo.png';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../Resources/Sketches/p5maplogo';

//const MarkerIcon = () => (<img src={logo} style={{height: 59.63, width: 69}}/>);
const MarkerIcon = () => (<P5Wrapper sketch={sketch}/>);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 48.3683326, lng: 14.5135392},
    zoom: 16
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <MarkerIcon className="markerIcon"
          lat={48.368912}
          lng={14.512721} />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap
