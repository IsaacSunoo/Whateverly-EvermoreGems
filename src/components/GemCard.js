import React, { Component } from 'react';


class GemCard extends Component {

  render() {
    return( 
      <div>
        <p>
          {this.props.allGems}
        </p>
      </div>
    )

  }



}
export default GemCard