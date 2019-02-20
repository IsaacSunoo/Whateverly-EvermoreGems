import React from 'react';
import ReactDOM from 'react-dom';
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
  const mockInitalState = {
      gems: [],
      metals: [],
      selectedGem: {},
      selectedMetal: {},
      display: 'gems'
  }

describe('App initial state', () => {
  let wrapper;
  wrapper = shallow(<App />);
   it('should match the snapshot with initial state', () => {
    expect(wrapper).toMatchSnapshot();
  });
   it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual(mockInitalState)
   })
})


describe('App', () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<App />);
   wrapper.setState({ gems: mockGem,
                    metals: mockMetal,
                    selectedGem:{},
                    selectedMetal: {},
                    display: 'gems'})
 })

  it('should match the snapshot with mock state', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with metals page state', () => {
    wrapper.setState({display: 'metals'})
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with results page state', () => {
    wrapper.setState({display: 'results'})
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should select a gem object for state',() => {
    wrapper.instance().selectGem(1)
    expect(wrapper.state('selectedGem')).toEqual(mockGem[0])
  });

  it('should select a metal object for state',() => {
    wrapper.instance().selectMetal(1)
    expect(wrapper.state('selectedMetal')).toEqual(mockMetal[0])
  });

});
