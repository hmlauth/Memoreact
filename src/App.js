import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Container from "./components/Container";
import characters from "./characters.json";
import NavBar from "./components/NavBar";

class App extends Component {

  // Setting this.state.character to the character json array
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    topScore: 0
  };

  // Fisher-Yates Shuffle
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    // While the currentIndex(array.length, temporaryValue or randomIndex) do not equal 0
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      // Obtain random index based on array.length
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  handleEvent = x => {
    this.shuffle(this.state.characters);
    // indexOf(value) searches array for value and if it is not there indexOf will return -1, if it is there is will return 1.
    if (this.state.clickedCharacters.indexOf(x) === -1) {
      this.setState({
        clickedCharacters: [...this.state.clickedCharacters, x],
        score: this.state.score + 1
      })
    } else {
      this.setState({
        clickedCharacters: [],
        score: 0,
        topScore: this.state.score
      })
    }
  }

  // Map over this.state.characters and render a characterCard component for each character object
  render() {
    return (
      <div>
        <NavBar 
          score={this.state.score}
          topScore={this.state.topScore}
          arrLength={this.state.clickedCharacters.length}
        />
        <Container>
          {this.state.characters.map(characters => (
            <CharacterCard
              id={characters.id}
              key={characters.id}
              image={characters.image}
              name={characters.name}
              onClick={this.handleEvent}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
