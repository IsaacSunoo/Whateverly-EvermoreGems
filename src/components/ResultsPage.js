import React from 'react';
import './scss/ResultsPage.scss'

function ResultsPage(props) {
  let gem = props.selectedGem
  let metal = props.selectedMetal
  return (
    <div>
      <section className='results-container'>
        <h1 className='results-header'>Results of your selections</h1>
        <img className='results-img' src= {gem.image}/>
        <article className='gem-results'>

          <h2>You selected {`${gem.name}`}</h2>
          <ul>
            <li>It is in the {`${gem.family}`} family</li>
            <li>It has a hardness scale rating of {`${gem.hardness}`}</li>
            <li>It comes in {`${gem.color}`}</li>
          </ul>
          <p>The hardest precious gem by far is 
          diamond with a hardness(Mohs) scale of 10. It is 
          recommended your stone be at least a 7. 
          But ideally the closer you can get to 
          10 the better for the longevity of your 
          ring. The softer the stone the more it may 
          chip, scratch or need replacing. </p>
        </article>
        <article className='metal-results'>
          <div>
            <h2>You selected {`${metal.name}`}</h2>
              <ul>
                <li>Is it resizeable? {`${metal.resizeable}`}</li>
                <li>Is it durable? {`${metal.durable}`}</li>
                <li>It comes in {`${metal.color}`}</li>
              </ul>
          </div>
              <p>There are a variety of metals you can get rings in these day. 
          The most common for fine jewelry is platinum, gold and silver. 
          Platinum is the most expensive and resilient. Platinum has two siblings 
          that show up in jewelry as well, palladium another fine selection and 
          rhodium which is frequently used as the coating on gold to make white gold. 
          Gold is usually a blend gold, silver and copper. The ratio of these can give 
          the gold a pinkish, whitish or greenish hue. Fine jewelry should be 
          14 karat - 18 karat. Silver on it’s own usually isn’t  strong enough to be 
          a wedding or engagement ring.
          <br/>
          Alternative metals such as steel, titanium and tungsten have become more popular in 
          men’s bands and are very durable but are not resizeable. As people age the size of 
          their fingers can change due to weight or knuckle swelling so It is worth considering 
          how long you will be able to wear the ring.
          </p>
        </article>
      </section>
    </div>
  )
}

export default ResultsPage;