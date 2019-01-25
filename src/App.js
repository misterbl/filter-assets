import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './actions/appActions'
import availableAssets from './assets'
import './App.css';
import AssetCard from './components/AssetCard';
import { getAssetPreview } from './selectors/appSelectors';
import AssetPreview from './components/AssetPreview';
import CONST from './const/types'


class App extends React.Component {
  addAssetToPreview = (asset) => {
    this.props.appActions.addAssetToPreview(asset)
  }

  removeAssetFromPreview = (asset) => {
    this.props.appActions.removeAssetFromPreview(asset)
  }

  filterAssetsLength = (assets, category) => {
    const listLength = assets.filter(asset => asset.type === category).length
    if (listLength > 0) {
      return listLength
    }
  }

  selectedAssetsTitles = (assets) => {
    const array = [];
    CONST.ASSET_TYPES.map(type => {
      const element = this.filterAssetsLength(assets, type)
      array.push(element && (`${element} x ${element === 1 ? type : `${type}s`}`))
    })
    return array
  }

  renderNumberOfEachAsset = (assets) => (
    <div className="col-6 asset-summary-right" >
      {this.selectedAssetsTitles(assets).map((title, index) => (
        <span key={`${index}_${title}`} className="info" >{title}</span >
      ))}
    </div >
  )

  render() {
    const { assetPreview } = this.props
    const assetPreviewLength = assetPreview.length
    const assetNumber = `${assetPreviewLength} ${assetPreviewLength === 1 ? 'asset' : 'assets'} `
    return (
      <div className="wrapper">
        <div className="asset-summary">
          <div className="container">
            <div className="row">
              <div className="col-6 asset-summary-left">
                <span>{assetNumber}</span>
              </div>
              {this.renderNumberOfEachAsset(assetPreview)}
            </div>
          </div>
        </div>
        <h2 className="instruction">Drag and drop an asset from the list on the left to the preview list on the right</h2>
        <div className="container asset-builder">
          <div className="row">
            <div className="col-4">
              <ul className="asset-picker">
                {availableAssets.map(asset => (
                  <AssetCard key={asset.id} asset={asset} addAssetToPreview={this.addAssetToPreview} />
                ))}
              </ul>
            </div>
            <div className="col-8">
              <h2 className="preview-title">Learning Assets Preview</h2>
              <AssetPreview addAssetToPreview={this.addAssetToPreview} assetPreview={this.props.assetPreview} removeAsset={this.removeAssetFromPreview} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (
  dispatch => ({
    appActions: bindActionCreators(appActions, dispatch),
  }))

export const mapStateToProps = (
  state
) => ({
  assetPreview: getAssetPreview(state),
});

const dragDropApp = DragDropContext(HTML5Backend)(App)
export default
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(dragDropApp);
