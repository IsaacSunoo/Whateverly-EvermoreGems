import React from 'react';
import MetalCard from './MetalCard';

function MetalsPage(props)  {
  const metalsCards = props.metals.map(metal => {
    return <MetalCard 
            selectMetal={props.selectMetal} 
            metalId={metal.id} 
            key={metal.id} 
            metalName={metal.name} 
            metalColors={metal.color} 
            metalMakeup={metal.makeup} />
  });
  return (
    <div className='metal-main'>
      <h1>Select a Metal to compliment your gem!</h1>
      <div className='metal-container'>
        {metalsCards}
      </div>
    </div>
  )
}


export default MetalsPage;