import React, { Component } from 'react';
import "./css/App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>Frederik Mikkelsen</h1>
                </div>
                <div className="top-img"/>
                <div className="content">
                    <h1>I'm Frederik Mikkelsen</h1>
                    <p>Currently a student in Esbjerg yet an experienced developer. I spend most of my spare time working on interesting projects ranging from web design, game development and bot development.</p>
                </div>
            </div>
        );
    }
}

export default App;
