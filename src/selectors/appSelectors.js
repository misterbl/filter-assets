import { createSelector } from 'reselect';

export const appSelector = (state) => state.app;

export const getAssetPreview = createSelector(
  appSelector,
  app => app.previewedAssets.previewedAssets,
);