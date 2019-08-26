import React from 'react';
import { shallow } from 'enzyme';
import SearchArtists from './containers/SearchArtists';

describe('SearchArtists component', () => {
  it('renders SearchArtists', () => {
    const wrapper = shallow(<SearchArtists />);
    expect(wrapper).toMatchSnapshot();
  });
});
