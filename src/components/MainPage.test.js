import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    };
    wrapper = shallow(<MainPage { ...mockProps }/>)
});

describe('MainPaege component tests', () => {
   it('renders MainPage without crashing', () => {
       expect(wrapper).toMatchSnapshot();
   })
});