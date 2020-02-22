import React, { Component } from "react";
import "../App.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", cid: props.match.params.cid};
    }

    callAPI(id) {
        fetch("http://localhost:9000/classes/" + id)
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    }

    componentDidMount() {
        this.callAPI(this.state.cid);
    }

    render() {
        return (
            <div className="App">
              <p className="App-intro">{this.state.apiResponse}</p>
              <Map
                google={this.props.google}
                zoom={17}
                style={mapStyles}
                initialCenter={{lat:34.182496, lng:-117.323914}}
              >
                <Marker position={{
                  lat: 34.182496,
                  lng: -117.323914
                }}/>
              </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUU2aCscIqcjz_pihnLhkaDUADExrwEu8'
})(Class);


const mapStyles = {
  width: '70%',
  height: '50%',
};