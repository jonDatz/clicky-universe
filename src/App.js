import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import './App.css';
import characters from "./characters.json";

class App extends Component {

  state = {
    characters
  };
  
  render() {
    return (
      <Wrapper>
        <Navbar />
        {this.state.characters.map(character => (
          <CharacterCard 
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          />
          ))}
      </Wrapper>
    );

  }
}

export default App;
