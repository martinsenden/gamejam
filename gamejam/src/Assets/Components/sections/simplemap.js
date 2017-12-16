import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
      </GoogleMapReact>
    );
  }
}

export default SimpleMap
