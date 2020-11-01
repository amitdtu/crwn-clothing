import React from 'react'
import { connect } from 'react-redux';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component'

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionProps}) => 
            <CollectionPreview key={id} {...otherCollectionProps} />
        )}
    </div>
)

const mapState = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapState)(CollectionOverview)