export const previewedAssets = (
  state = { previewedAssets: [] },
  { type, asset },
) => {
  switch (type) {
    case 'ADD_ASSET_TO_PREVIEW':
      return {
        ...state,
        previewedAssets: [...state.previewedAssets, asset],
      };
    case 'REMOVE_ASSET_FROM_PREVIEW':
      return {
        ...state,
        previewedAssets: state.previewedAssets.filter(previewedAsset => asset.id !== previewedAsset.asset.id),
      };
    default:
      return state;
  }
};
