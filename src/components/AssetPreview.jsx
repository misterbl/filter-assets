import React from 'react';
import { DropTarget } from 'react-dnd';
import assets from '../assets'
import AssetCard from './AssetCard';
import TYPES from '../const/types'
import { target, collect } from '../utils/DropUtils'




class AssetPreview extends React.Component {
    componentDidUpdate() {
        const { didDrop, addAssetToPreview, item, assetPreview } = this.props;
        if (didDrop && assetPreview.indexOf(item) === -1) {
            addAssetToPreview(item)
        }
    }

    render() {
        const { connectDropTarget, assetPreview, removeAsset } = this.props;
        return connectDropTarget(
            <ul className='Cell preview-container '>
                {assetPreview.map(asset => (<AssetCard key={asset.id} {...asset} button removeAsset={removeAsset} />))
                }
            </ul>
        );
    }
}

export default DropTarget(TYPES.ASSET_CARD, target, collect)(AssetPreview);

