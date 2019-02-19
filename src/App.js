import React, { Component } from 'react';
import GemsPage from './components/GemsPage';
import MetalsPage from './components/MetalsPage';
import ResultsPage from './components/ResultsPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gems: [],
      metals: [],
      selectedGem: {},
      selectedMetal: {},
      display: 'gems'
    }

  }

  componentDidMount() {
    fetch('http://whateverly-datasets.herokuapp.com/api/v1/gems')
      .then(response => response.json())
      .then(gems => {
        this.setState({
          gems: gems.gems
        })
      })
      .catch(err => {
        throw new Error(err);
      })

      fetch('http://whateverly-datasets.herokuapp.com/api/v1/metals')
      .then(response => response.json())
      .then(metals => {
        this.setState({
          metals: metals.metals
        })
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  selectGem = (id) => {
   let selectedGem = this.state.gems.find((gem) => {
      return gem.id === id
    })
    this.setState({
      selectedGem
    })
    this.changeDisplayPage('metals')
  }

  selectMetal = (id) => {
    let selectedMetal = this.state.metals.find((metal) => {
      return metal.id === id
    })
    this.setState({
      selectedMetal
    })
    this.changeDisplayPage('results')
  }

  changeDisplayPage = (nextPage) => {
    this.setState({
      display: nextPage
    })
  }

  render() {
    return (
      <div>
        {
          this.state.display === 'gems' &&
          <GemsPage selectGem={this.selectGem} gems={this.state.gems}/>
        }
        {
          this.state.display === 'metals' &&
          <MetalsPage selectMetal={this.selectMetal} metals={this.state.metals}/>
        }
        {
          this.state.display === 'results' &&
          <ResultsPage selectedGem={this.state.selectedGem} selectedMetal={this.state.selectedMetal} />
        }
      
      </div>
    );
  }
}


export default App;