import React, { Component } from 'react';
import GemCard from './GemCard'
import { gems, metals } from '../dataset/evermoreGems';


class GemsPage extends Component {
    constructor() {
        super();
        this.state = {
          GemPage: false,
          gems,
          metals
        };
      }



    render() {
      const GemPageDisplay = this.state.GemPage ? { display: 'none' } : {};


    return (
      <div style={GemPageDisplay}>
        <div>
          <h1>Evermore Gems </h1>
          <h2> instructions </h2>
          <input type="text"/>
          <button>Search</button>
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
        {gems.map((gem) => {
          return <GemCard key={gem.id} allGems={gem.Name}/> 
        })}
        

        </div>
      </div>
    );
  }

  
}

export default GemsPage;
