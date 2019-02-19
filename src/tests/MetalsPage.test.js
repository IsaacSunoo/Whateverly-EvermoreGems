import React from 'react';
import MetalsPage from '../components/MetalsPage.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const selectMetalMock = jest.fn();
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
        selectMetal={selectMetalMock}
        metals={mockMetal}
      />
    )
  })

  it('should match the snapshot with all data passed in' , () =>{
    expect(wrapper).toMatchSnapshot();
  })
});