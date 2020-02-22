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
        .then(res => {
          this.setState({ apiResponse: res });
          console.log(res);
          var obj = JSON.parse(res)[0];
          console.log(obj);
        })
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
                initialCenter={{lat:34.1811, lng:-117.321}}
              >
                <Marker position={{
                  lat: 34.1811,
                  lng: -117.321
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