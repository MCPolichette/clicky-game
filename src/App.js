// import React and component files
import React, { Component } from "react";
import IconCard from "./components/IconCard";
import Footer from "./components/Footer";
import IconButton from "./components/IconButton";
// import TestModal from "./components/TestModal";

// import JSON file containing card-data
import faces from "./data/faces.json";
import vehicles from "./data/vehicles.json";
import brands from "./data/brands.json";

// import CSS file.
import "./App.css";

// Write up Class App.
class App extends Component {
  // Establish state at the beginning of the class
  state = {
    cards: faces,
    currentScore: 0,
    topScore: 0,
    clickedIcons: [],
    modalShow: false
  };
  iconChange = iconType => {
    let cards = this.state.cards;
    if (iconType === "vehicles") {
      cards = vehicles;
    }
    if (iconType === "faces") {
      cards = faces;
    }
    if (iconType === "brands") {
      cards = brands;
    }
    // cards = iconType;
    this.setState({ cards });
    this.resetGame();

    alert("Starting a new game with your new Icons!");
  };

  shuffle = () => {
    // Copy the cards array to get a new array so React Detects the change.
    const cards = [].concat(this.state.cards);
    // Shuffles the cards
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.setState({ cards });
  };

  showModal = () => {
    this.setState({ ModalShow: true });
    console.log("show");
  };

  hideModal = () => {
    this.setState({ ModalShow: false });
  };
  resetGame = () => {
    this.setState({
      currentScore: 0,
      clickedIcons: []
    });
  };
  // onClick function
  iconClick = clickedId => {
    const { currentScore, topScore, clickedIcons } = this.state;
    const usedIcons = this.state.clickedIcons.indexOf(clickedId) > -1;
    // console.logs to identify working innards ++++++++++ Remove These +++++++++
    console.log(clickedId);
    console.log("usedIcons =" + usedIcons);

    if (usedIcons) {
      // Lose Scenario.  Reset Game. Shuffle Cards.
      console.log("Clicked Too Many Times");

      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      this.shuffle();
      this.resetGame();
      alert("you lost!");
    } else if (currentScore < 11) {
      // Continue Game, Add to Score, Shuffle Cards,
      this.shuffle();
      console.log("CLICKED Once");
      const newClickedIcons = [].concat(clickedIcons, clickedId);
      this.setState({
        currentScore: currentScore + 1,
        clickedIcons: newClickedIcons
      });
    } else {
      // Win Scenario. Alert Win. Clear board. Shuffle Cards.
      alert("YOU WON!");
      if (currentScore > topScore) {
        this.setState({ topScore: currentScore });
      }
      this.shuffle();
      this.resetGame();
    }
  };

  render() {
    return (
      <div>
        <div className="App-header App">
          <h1 className="display-1">Icon Clicky Game</h1>
          <h3 className="scores">Correct Guesses: {this.state.currentScore}</h3>
          <h3 className="scores">Top Score: {this.state.topScore}</h3>
          <IconButton iconType="vehicles" iconChange={this.iconChange}>
            <i className="fas fa-car" /> Vehicles
          </IconButton>
          <IconButton iconType="faces" iconChange={this.iconChange}>
            <i className="fas fa-smile" /> Faces
          </IconButton>
          <IconButton iconType="brands" iconChange={this.iconChange}>
            <i className="fab fa-apple" /> Brands
          </IconButton>
        </div>
        <div className="container gameWrapper">
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
