// import React
import React, { Component } from "react";
// import component files
import IconCard from "./components/IconCard";

// import JSON file containing card-data
import cards from "./cards.json";
// import CSS file.
import "./App.css";
import FaceCard from "./components/IconCard/IconCard";

// establish global variables
let currentScore = 0;
let topScore = 0;

// Write up Class App.
class App extends Component {
  // Establish state at the beginning of the class
  state = {
    cards,
    currentScore,
    topScore
  };

  // onClick function
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
            onClick={console.log("cra")}
            className="btn btn-success"
            id="click"
          >
            #
          </button>
        </div>
        <div className="Container">
          <div className="row">
            <div className="col-md-6">
              {this.state.cards.map(card => (
                <IconCard id={cards.id} key={cards.id} image={cards.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
