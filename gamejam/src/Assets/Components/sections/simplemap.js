import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../../Resources/Images/Misc/logo.png';

const MarkerIcon = () => (<img src={logo} style={{height: 59.63, width: 69}}/>);

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
        <MarkerIcon className="markericon"
          lat={48.3686000}
          lng={14.5131392} />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap
