import React from 'react';

function GemCard(props) {
    return(
      <div className="gem-cards">
        <img className="gem-pic" src= {props.gemImg}/>
        <article className="gem-info">
          <h5 className="gem-name">
            {props.gemName}
          </h5>
          <h6 className="gem-family">
            {props.gemFam}
          </h6>
        </article>
        <button onClick={() => props.selectGem(props.gemId)} className="select-btn">Select</button>
      </div>
    )
}

export default GemCard;

// we add an anon func to button so it dosn't run on button creation //