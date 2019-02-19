import React from 'react';
import GemsPage from '../components/GemsPage';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const selectGemMock = jest.fn();
const gemsByNameMock = jest.fn();
const selectColorMock = jest.fn();

const mockGem = [{
  "name": "Aquamarine",
  "id": 1,
  "color": ["Blue"],
  "family": "Beryl",
  "hardness": [7.5, 8],
  "image": "https://i.imgur.com/mupSKCl.jpg"
},
  {
    "name": "Bixbite",
    "id": 2,
    "color": ["Red"],
    "family": "Beryl",
    "hardness": [7.5, 8],
    "image": "https://i.imgur.com/mupSKCl.jpg"
  }
]

describe('GemsPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <GemsPage
        selectGem={selectGemMock}
        gems={mockGem}
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with gem color containing red', () => {
    const mockEvent = { target: { value: 'Red' } };
    wrapper.find('#filter-colors').simulate('change', mockEvent);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the proper defualt state', () => {
    expect(wrapper.state('gemPage')).toEqual(false);
    expect(wrapper.state('searchInput')).toEqual('');
  });

  it('should update the input value', () => {
    expect(wrapper.state('searchInput')).toEqual('');
    wrapper.find('#input-value').simulate('change', { target: { value: 'Aquamarine' } });
    wrapper.find('.search-button').simulate('click');
    expect(wrapper.state('searchedGems')).toEqual([mockGem[0]]);
  });

  it('should filter by color of gems', () => {
    wrapper.find('#filter-colors').simulate('change', { target: { value: 'Red' } });
    expect(wrapper.state('searchedGems')).toEqual([mockGem[1]]);
  });

});