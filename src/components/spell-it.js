import React, { Component } from 'react';
import SpeechToText from 'speech-to-text';
import Loading from './loader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.css';

class SpellIt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "",
            loading: false
        },
            this.sayWord = this.sayWord.bind(this)
    }
    sayWord() {
        const onAnythingSaid = text => {
            this.setState({ loading: true })
            return `${text}`
        };
        const onFinalised = text => {
            if (text.length <= 0) {
                alert("please try again...")
            } else {
                var word = `${text}`;
                this.setState({ word: `${word.split(" ")[0]}`, loading: false });
                return word[0];
            }
        }
        try {
            const listener = new SpeechToText(onAnythingSaid, onFinalised);
            listener.startListening();
            var stop = setTimeout(() => {
                listener.stopListening();
            }, 5000);

        } catch (error) {
            ;
        }
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="word">Record your word</h1>
                </header>

                <div className="spell-it">
                    {this.state.loading && (
                        <Loading />
                    )}
                    {!this.state.loading && (
                        <h3 className="word">your word   : <u>{this.state.word}</u></h3>
                    )}
                    <button className="btn btn-primary" id="record-btn" onClick={this.sayWord}>record</button>
                    <Link to="/startpage"><button className="btn btn-primary" id="back-btn">back</button></Link>
                </div>
            </div>

        );
    }
}

export default SpellIt;
