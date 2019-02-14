import React, { Component } from 'react';
import SplashPage from './components/SplashPage';
import GemsPage from './components/GemsPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gems: [],
      metals: []
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
  }
    // fetch('http://whateverly-datasets.herokuapp.com/api/v1/metals')
    // .then(response => response.json())
    // .then(metals => console.log(metals))
    // .then(metals => {
    //   this.setState({
    //     metals: metals
    //   });
    // })
    // .catch(err => {
    //   throw new Error(err);
    // });
  // }

  render() {
    return (
      <div>
        <SplashPage />
        <GemsPage gems={this.state.gems}/>
      </div>
    );
  }
}

export default App;