import React from 'react';
import MetalsPage from '../components/MetalsPage.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const metalsCards = jest.fn();


const mockMetal =[{
        "name": "Tungsten",
        "id": 8,
        "color": ["White"],
        "makeup": ["Tungsten"],
        "durable": "True",
        "resizeable": "False"
    }]


describe('MetalsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MetalsPage
        selectMetal={mockMetal} 
        metalId={mockMetal.id} 
        key={mockMetal.id} 
        metalName={mockMetal.name} 
        metalColors={mockMetal.color} 
        metalMakeup={mockMetal.makeup}
      />
    )
  })
  
  it('should match the snapshot with all data passed in' , () =>{
    expect(wrapper).toMatchSnapshot();
  })
});