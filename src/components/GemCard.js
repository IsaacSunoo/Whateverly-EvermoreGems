import React, { Component } from 'react';
import './GemCarsStyle.css';


class GemCard extends Component {

  render() {
    return( 
      <div className="gem-cards">
        <h5>
          {this.props.gemName}
        </h5>
        <h6>
          {this.props.gemFam}
        </h6>
        <img src= {this.props.gemImg}/>

      </div>
    )

  }



}
export default GemCard