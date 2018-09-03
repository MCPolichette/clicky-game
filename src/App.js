// import React
import React, { Component } from "react";
// import component files
import IconCard from "./components/IconCard";
import Footer from "./components/Footer";

// import JSON file containing card-data
import cards from "./faces.json";
// import CSS file.
import "./App.css";

// establish global variables
let currentScore = 0;
let topScore = 0;
let clickedIcons = [];

// Write up Class App.
class App extends Component {
  // Establish state at the beginning of the class
  state = {
    cards,
    currentScore,
    topScore,
    clickedIcons
  };
  // onClick function
  iconClick = clickedId => {
    const usedIcons = this.state.clickedIcons.indexOf(clickedId);
    console.log(clickedId);
    this.setState({ currentScore: currentScore++ });
  };

  // if else statement, ifs:
  // matches already clicked,
  // doesnt match click,
  // win scenario

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">TEST</h1>
          <h3>Correct Guesses: {this.state.currentScore}</h3>
          <h3>Top Score: {this.state.topScore}</h3>
          <button
            onClick={this.iconClick}
            className="btn btn-success"
            id="click"
          >
            #
          </button>
        </div>
        <div className="Container gameWrapper">
          {this.state.cards.map(cards => (
            <IconCard
              id={cards.id}
              key={cards.id}
              icon={cards.icon}
              iconClick={this.iconClick}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
