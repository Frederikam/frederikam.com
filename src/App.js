import React, { Component } from 'react';
import "./css/App.css";
import Project from "./Project";

class App extends Component {
    render() {
        let id = 0;

        return (
            <div className="App">
                <div className="header">
                    <h1>Frederik Mikkelsen</h1>
                </div>
                <div className="top-img"/>
                <div className="content">
                    <h1>I'm Frederik Mikkelsen</h1>
                    <p>Currently a student near Esbjerg, Denmark, yet an experienced developer. I spend most of my spare time working on interesting projects ranging from web design, game development and bot development.</p>
                    <h2>Projects:</h2>
                    <Project id={id++} title="FredBoat" lang="java">
                        FredBoat is a free open-source Discord music bot with over 5 million users.
                        The most popular feature about FredBoat is its accessibility and ease of use.
                        In fact, we see very few people referring to the documentation compared to how many users are actually using the bot.
                        <br/>
                        In addition to being hosted by us as a free service, it is relatively easy to just host your own instance of the bot.
                    </Project>
                    <Project id={id++} title="Fredboat.com" lang="js">
                        <a href="https://fredboat.com/">Fredboat.com</a> serves as a documentation site for FredBoat.
                        All the documentation here is written in markdown markup with a few additions.
                        The site is designed in such a way that it works on mobile screen sizes.
                        The advertisements on this site helps cover the costs of keeping FredBoat alive and well.
                    </Project>
                    <Project id={id++} title="Fred.moe" lang="java">
                        <a href="https://fred.moe/">Fred.moe</a> is a small file sharing service that is designed in such
                        a way that it is very easy to deploy one yourself with limited technical knowledge.
                        It is designed in such a way that when you start it, it comes with high-end SSL encryption
                        as well as antivirus out of the box with almost no configuration.
                        <br/>
                        The benefit of hosting a small file sharing service is that you get short filenames
                        when uploading a file such as "/abc.png".
                    </Project>
                    <Project id={id++} title="The Maze Runner" lang="lua">
                        <a href="https://www.roblox.com/games/182781154/The-Maze-Runner">The Maze Runner</a> is a
                        semi-professional game developed with Roblox in Lua. While its popularity has mostly faded in
                        recent years, a dedicated fanbase is still enjoying the game. The game attracted over
                        5 million play sessions since late 2014.
                        <br/>
                        While developing this game I was part of a group called Revolution Games where I was the lead
                        scripter at the time.
                    </Project>
                    <Project id={id++} title="Hitpilot" lang="unity">
                        Hitpilot is a small game developed during a 48 hour game camp taking place
                        at <a href="https://game.unf.dk/">UNF Game Development Camp 2017</a> in Copenhagen.
                        <br/>
                        Hitpilot is an arcade-like game with local 4 player multiplayer on a shared screen and keyboard.
                        Each of the 4 players are given 3 keys on the keyboard with which they can turn their planes
                        and shoot their opponents.
                        <br/>
                        Of the 12 games being developed at the camp, Hitpilot won a prize for being the 3 judge's
                        favorite game.
                    </Project>
                </div>
            </div>
        );
    }
}

export default App;
