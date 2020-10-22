import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import CollectionPreview from '../collection/collection-preview.component';
import { selectColllectiosForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProp = createStructuredSelector({
    collections: selectColllectiosForPreview
});


export default connect(mapStateToProp)(CollectionsOverview);