import React from 'react';
import GemsPage from './GemsPage';
import { shallow } from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('GemsPage', () => {
  let wrapper;

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should take in a value and lowercase it', () =>{
    updateInputValue('Red');
    
  });

  it('', () =>{

  });

  it('', () =>{

  });

});