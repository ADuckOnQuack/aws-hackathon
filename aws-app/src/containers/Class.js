import React, { Component } from "react";
import "../App.css";

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
            </div>
        );
    }
}

export default Class;