import * as appActions from '../appActions';

describe('appActions', () => {
  describe('addAssetToPreview', () => {
    it('should return the correct action', () => {
      const actual = appActions.addAssetToPreview('testData');
      expect(actual).toEqual({
        type: 'ADD_ASSET_TO_PREVIEW',
        asset: 'testData',
      });
    });
  });
  describe('removeAssetFromPreview', () => {
    it('should return the correct action', () => {
      const actual = appActions.removeAssetFromPreview('testData');
      expect(actual).toEqual({
        type: 'REMOVE_ASSET_FROM_PREVIEW',
        asset: 'testData',
      });
    });
  });
});
