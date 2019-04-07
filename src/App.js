import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <CharacterCard />


      </Wrapper>
    );

  }
}

export default App;
