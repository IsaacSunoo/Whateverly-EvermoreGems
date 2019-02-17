import React from 'react';
import './scss/MetalCardStyle.scss';

function MetalCard(props) {
    console.log(props);

  return (
    <div className='metal-card'>
        <h5 className='metal-name'>
            {props.metalName}
        </h5>
        <h6>
            Metal Composition
            {props.metalMakeup.map(metal => {
                return (
                    <div>{metal}</div>
                )
            })}
        </h6>
    </div>
  )
}
export default MetalCard;