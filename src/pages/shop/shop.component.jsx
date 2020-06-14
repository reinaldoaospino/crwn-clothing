import React from 'react';
import { Route } from 'react-router-dom'


import CollectionsOverview from '../../componets/collections-overview/collections-overview.component';
import CaterogryPage from '../collection/collection.component';

const ShopPage = ({ match }) => (


    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CaterogryPage}/>
    </div>


)



export default ShopPage;