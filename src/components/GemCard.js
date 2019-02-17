import React from 'react';
import './scss/GemCardStyle.scss';

function GemCard(props) {
    return(
      <div className="gem-cards">
        <h5>
          {props.gemName}
        </h5>
        <h6>
          {props.gemFam}
        </h6>
        <img src= {props.gemImg}/>
      </div>
    )
}

export default GemCard;