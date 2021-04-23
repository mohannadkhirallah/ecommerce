import React from 'react';
import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {Route} from 'react-router-dom'


const ShopPage =({match})=>

        (
            <div className='shop-page'>
             <Route path={`${match.path}`} exact component={CollectionsOverView}/>
             <Route path={`${match.path}/:collectionId`}  component={CollectionPage}/>
            </div>
        );

export default  ShopPage;