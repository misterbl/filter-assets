import * as appReducers from '../appReducers';
import * as appActions from '../../actions/appActions';

describe('appReducers', () => {
  describe('previewedAssets', () => {
    it(`when called with ADD_ASSET_TO_PREVIEW it should update the app state`, () => {
      const action = appActions.addAssetToPreview('asset');
      expect(appReducers.previewedAssets('asset', action)).toEqual('test');
    });
    xit(`when called with REMOVE_ASSET_FROM_PREVIEW it should update the app state`, () => {
      const action = appActions.removeAssetFromPreview('test');
      expect(appReducers.previewedAssets('test', action)).toEqual('test');
    });
    it('when called with an UNKNOWN action it should return the previous state', () => {
      const action = { type: 'UNKOWN' };
      expect(appReducers.frpId('default', action)).toEqual('default');
    });
    it('initial state', () => {
      const action = { type: 'UNKOWN' };
      expect(appReducers.frpId(undefined, action)).toEqual(null);
    });
  });
});
