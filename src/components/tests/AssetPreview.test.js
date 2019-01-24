import React from 'react';
import AssetPreview from '../AssetPreview';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('AssetPreview', () => {
  let wrapper;
  const props = {
    didDrop: false,
    assetPreview: ["item1", "item2"],
    item: "item",
    addAssetToPreview: jest.fn()
  }
  beforeEach(() => {
    jest.resetAllMocks()
    wrapper = shallow(<AssetPreview {...props} />)
  })

  it('does not call addAssetToPreview if didDrop is false', () => {
    wrapper.instance().componentDidUpdate()
    expect(props.addAssetToPreview).not.toHaveBeenCalled()
  });
  it('calls addAssetToPreview if didDrop is true and assetPreview.indexOf(item) === -1', () => {
    const newProps = { ...props, didDrop: true, addAssetToPreview: jest.fn() }
    const newWrapper = shallow(<AssetPreview {...newProps} />)
    newWrapper.instance().componentDidUpdate()
    expect(newProps.addAssetToPreview).not.toHaveBeenCalled()
  });
})

