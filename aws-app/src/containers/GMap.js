import React, { Component } from "react";
import "../App.css";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Map
          google={this.props.google}
          zoom={17}
          style={mapStyles}
          initialCenter={{lat:34.182496, lng:-117.323914}}
          />
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUU2aCscIqcjz_pihnLhkaDUADExrwEu8'
})(GMap);

const mapStyles = {
  width: '100%',
  height: '100%',
};