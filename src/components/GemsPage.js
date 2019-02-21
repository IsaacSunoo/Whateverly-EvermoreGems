import React, { Component } from "react";
import GemCard from "./GemCard";
import Header from "./Header";
import Greeting from "./Greeting";

class GemsPage extends Component {
    constructor() {
        super();
        this.state = {
          gemPage: false,
          searchInput: '',
          searchedGems: []
        };
    }

  updateInputValue = (e) => {
    let searchInput = e.target.value;
    this.setState({
      searchInput: searchInput.toLowerCase()
    })
  }

  gemsByName = () => {
    let searchedGems = this.props.gems.filter(gem => {
      return gem.name.toLowerCase().includes(this.state.searchInput);
      })
    this.setState({
      searchedGems
    })
  }

  selectColor = (e) => {
    let clickedColor = e.target.value;
    let searchedGems = this.props.gems.filter(gem => {
      return gem.color.includes(clickedColor);
    })
    this.setState({
      searchedGems
    })
  }


  render() {
    const GemPageDisplay = this.state.GemPage ? { display: "none" } : {};
    const gemCards = this.state.searchedGems.map(gem => {
      return <GemCard 
                selectGem={this.props.selectGem} 
                key={gem.id} 
                gemId={gem.id} 
                gemName={gem.name} 
                gemFam={gem.family} 
                gemImg={gem.image} />
    })

    return (
      <div style={GemPageDisplay}>
        <div className="container">
          <Header />
          <Greeting />
          <input
            id="input-value"
            value={this.state.searchInput}
            onChange={this.updateInputValue}
            type="text"
            placeholder="Search Gem by Name"
          />
          <button onClick={this.gemsByName} 
                  className='search-button'>Find Gems!</button>
          <p className='color-dropdown'>
            <span className='search-text'>Search Gem by Color</span>
            <select onChange={this.selectColor} 
                    id='filter-colors'>
              <option value="">Select Color</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Orange">Orange</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Purple">Purple</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
              <option value="Grey">Grey</option>
              <option value="Black">Black</option>
            </select>
          </p>
        </div>
        <div className="gem-results">{gemCards}</div>
      </div>
    );
  }
}


export default GemsPage;