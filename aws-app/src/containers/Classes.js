import React, { Component } from "react";
import "../App.css";

class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", uid: 1 };
    }

    callAPI() {
        fetch("http://localhost:9000/classes?uid=" + this.state.uid)
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default Classes;