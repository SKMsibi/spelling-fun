import React, { Component } from 'react';
import SpeechToText from 'speech-to-text';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class WriteIt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "coding"
        },
            this.sayWord = this.sayWord.bind(this)
    }
    sayWord() {
        const onAnythingSaid = text => console.log(`Interim text: ${text}`);
        const onFinalised = text => console.log(`Finalised text: ${text}`);
        try {
            const listener = new SpeechToText(onAnythingSaid, onFinalised);
            listener.startListening();
            console.log("listener", listener);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="word">write your word</h1>
                </header>

                <div className="spell-it">
                    <button className="btn btn-primary" id="record-btn" onClick={this.sayWord}>Ready</button>
                    <h3 className="word">your word   : <input type="text" name="word" placeholder="Type your word here..." /></h3>
                    <button className="btn btn-primary" id="record-btn">Check word</button>
                    <Link to="/startpage"><button className="btn btn-primary" id="back-btn">back</button></Link>
                </div>
            </div>

        );
    }
}

export default WriteIt;
