import React from 'react';
import AssetCard from '../AssetCard';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<AssetCard />);
  expect(div).toMatchSnapshot();
});
