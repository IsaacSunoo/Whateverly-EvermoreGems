import React, { Component } from 'react';
import SplashPage from './components/SplashPage';
import GemsPage from './components/GemsPage';
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
        <SplashPage />
        <GemsPage />
      </div>
    );
  }
}

export default App;
