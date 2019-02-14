import React, { Component } from 'react';

import GemCard from './GemCard';

class GemsPage extends Component {
    constructor() {
        super();
        this.state = {
          GemPage: false
        };
    }

  gemsByColor = (searchWord) => {
    let filteredGems = this.props.gems.filter(gem => {
        return gem.name.includes(searchWord);
      })
      console.log(filteredGems);
  }


  render() {
    const GemPageDisplay = this.state.GemPage ? { display: 'none' } : {};
    const gemCards = this.props.gems.map(gem => {
      return <GemCard key={gem.id} gemName={gem.name} gemFam ={gem.family} gemImg = {gem.image}/>
    })

    return (
      <div style={GemPageDisplay}>
        <div>
          <h1>Evermore Gems </h1>
          <h2> Instructions </h2>
          <input type="text"/>
          <button onClick={this.gemsByColor('M')}>Search</button>
          <select>
            <option value= "white"> White </option>
            <option value= "red"> Red </option>
            <option value= "orange"> Orange </option>
            <option value= "yellow"> Yellow </option>
            <option value= "green"> Green </option>
            <option value= "blue"> Blue </option>
            <option value= "purple"> Purple </option>
            <option value= "pink"> Pink </option>
            <option value= "brown"> Brown </option>
            <option value= "grey"> Grey </option>
            <option value= "black"> Black </option>
          </select>
        </div>
        <div className="result">
          {gemCards}
        </div>
      </div>
    );
  }


}


export default GemsPage;