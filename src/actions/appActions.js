import { makeActionCreator } from '../utils/actionCreator';

export const addAssetToPreview = makeActionCreator('ADD_ASSET_TO_PREVIEW', 'asset');

export const removeAssetFromPreview = makeActionCreator('REMOVE_ASSET_FROM_PREVIEW', 'asset');
