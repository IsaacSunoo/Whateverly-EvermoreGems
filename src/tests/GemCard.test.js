import React from 'react';
import GemCard from '../components/GemCard.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const selectGemMock = jest.fn();

const mockGem = [{
  "name": "Aquamarine",
  "id": 1,
  "color": ["Blue"],
  "family": "Beryl",
  "hardness": [7.5, 8],
  "image": "https://i.imgur.com/mupSKCl.jpg"
}]



describe('GemCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GemCard
      selectGem={selectGemMock}
        gemId={mockGem.id}
        gemName ={mockGem.name}
        gemFam = {mockGem.family}/>
    )
  })
  
  it('should match the snapshot with all data passed in' , () =>{
    expect(wrapper).toMatchSnapshot();
  })
});



