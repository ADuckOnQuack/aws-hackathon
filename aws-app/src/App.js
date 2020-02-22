import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Test from './containers/Test';
import GMap from './containers/GMap';
import Classes from './containers/Classes';
import Class from './containers/Class';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path="/login" exact component={Login} /> 
          <Route path="/test" exact component={Test} />
          <Route path="/map" exact component={GMap} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/classes/:cid" exact component={Class} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

//import React, { Component } from "react";
//import logo from "./logo.svg";
//import "./App.css";

//class App extends Component {
    //constructor(props) {
        //super(props);
        //this.state = { apiResponse: "" };
    //}

    //callAPI() {
        //fetch("http://localhost:9000/testAPI")
            //.then(res => res.text())
            //.then(res => this.setState({ apiResponse: res }))
            //.catch(err => err);
    //}

    //componentDidMount() {
        //this.callAPI();
    //}

    //render() {
        //return (
            //<div className="App">
                //<header className="App-header">
                    //<img src={logo} className="App-logo" alt="logo" />
                    //<h1 className="App-title">Welcome to React</h1>
                //</header>
                //<p className="App-intro">{this.state.apiResponse}</p>
            //</div>
        //);
    //}
//}

//export default App;