import React from 'react';
import { DragSource } from 'react-dnd';
import TYPES from '../const/types'
import { source, collect } from '../utils/DragUtils'


const AssetCard = ({ asset, button, connectDragSource, removeAsset }) =>
    connectDragSource(
        <li className={`asset type-${asset.type.toLowerCase()}`}>
            <h2>{asset.name}</h2>
            <p>
                {/* TODO use minute is only 1 minute (check when minute akes a s) */}
                <span className="info">{`${asset.duration} minutes`}</span>
                <span className="info">{asset.type}</span>
            </p>
            {button && <button onClick={() => removeAsset(asset)} className="remove-asset">x</button>}
        </li >
    );


export default DragSource(TYPES.ASSET_CARD, source, collect)(AssetCard);
