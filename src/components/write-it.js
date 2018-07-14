import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class WriteIt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "coding"
        }
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="word">write your word</h1>
                </header>

                <div className="spell-it">
                    <h3 className="word">your word   : <u>{this.state.word}</u></h3>
                    <button className="btn btn-primary" id="record-btn">record</button>
                    <Link to="/startpage"><button className="btn btn-primary" id="back-btn">back</button></Link>
                </div>
            </div>

        );
    }
}

export default WriteIt;
