import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const mockGem = [{
    "name": "Aquamarine",
    "id": 1
  },
  {
    "name": "Bixbite",
    "id": 2,
  }
]

const mockMetal = [{
    "name": "Gold",
    "id": 1
  },
  {
    "name": "Silver",
    "id": 2,
  }  
]

describe('App'), () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(
     <App />
   )
   wrapper.setState({selectedGem:{},
                    selectedMetal: {},
                    display: 'gems'})
 })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should select a gem object for state', => {
    wrapper.instance.selectGem(1)
      let selectedGem = mockGem.find((gem) => {
        return gem.id === id
    expect(wrapper.state.(selectGem).toEqual({  "name": "Aquamarine",
                                                "id": 1
                                            })
  });

});
