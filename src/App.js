import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import hat1 from './hat1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to spelling fun</h1>
          <img src={hat1} className="hat" alt="hat" />
        </header>
        <h2 className="quote">Where spelling is made for fun.</h2>
        <div className="art">
          <h1 className="spelling">Spelling</h1>
          <h1 className="f">F</h1>
          <h1 className="u">u</h1>
          <h1 className="n">n</h1>
        </div>
        <Link to="/startpage"><button className="btn btn-primary">Start</button></Link>
      </div>

    );
  }
}

export default App;
