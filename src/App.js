import React, { Component } from 'react';
import Header from './components/Header';
import { gems, metals } from './dataset/evermoreGems';
import './App.css';

class App extends Component {
  state = {
    gems,
    metals
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
