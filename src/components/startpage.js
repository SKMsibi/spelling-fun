import React, { Component } from 'react';
import moduleName from '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StartPage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="word">Whats next</h1>
                </header>
                <div className="grid-buttons">
                    <Link to="/spell"> <button className="btn btn-primary" id="spell-btn"> Spell It</button></Link>
                    <Link to="/write"><button className="btn btn-warning" id="write-btn">Write it </button></Link>
                    <Link to="/quit"><button className="btn btn-danger" id="quit-btn">Quit</button></Link>
                </div>
            </div>
        );
    }
}
export default StartPage;
