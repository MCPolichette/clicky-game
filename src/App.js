// import React
import React, { Component } from "react";
// import component files
import IconCard from "./components/IconCard";
import Footer from "./components/Footer";

// import JSON file containing card-data
import faces from "./faces.json";
import vehicles from "./vehicles.json";
// import CSS file.
import "./App.css";

// establish global variables
let cards = faces;
let currentScore = 0;
let topScore = 0;
let clickedIcons = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
    const usedIcons = this.state.clickedIcons.indexOf(clickedId) > -1;
    // console.logs to identify working innards ++++++++++ Remove These +++++++++
    console.log(clickedId);
    console.log("usedIcons =" + usedIcons);
    clickedIcons.push(clickedId);

    if (usedIcons) {
      // Lose Scenario.  Reset Game. Shuffle Cards.
      console.log("Clicked Too Many Times");

      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      shuffle(cards);
      this.setState({
        currentScore: 0,
        clickedIcons: []
      });
      alert("you lost!");
    } else if (currentScore < 11) {
      // Continue Game, Add to Score, Shuffle Cards,
      shuffle(cards);
      this.setState({ currentScore: currentScore++ });
      console.log("CLICKED Once");
    } else {
      // Win Scenario. Alert Win. Clear board. Shuffle Cards.
      alert("YOU WON!");
      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      shuffle(cards);
      this.setState({
        currentScore: 0,
        clickedIcons: []
      });
    }
  };

  render() {
    return (
      <div>
        <div className="App-header App">
          <h1>TEST</h1>
          <h3>Correct Guesses: {this.state.currentScore}</h3>
          <h3>Top Score: {this.state.topScore}</h3>
          {/* <button
            onClick={this.iconClick}
            className="btn btn-success"
            id="click"
          >
            #
          </button> */}
        </div>
        <div className="Container gameWrapper">
          {this.state.cards.map(cards => (
            <IconCard
              id={cards.id}
              key={cards.id}
              icon={cards.icon}
              iconClick={this.iconClick}
              picked={cards.picked}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
