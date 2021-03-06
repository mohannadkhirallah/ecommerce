import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import{createStructuredSelector} from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';

import './collections-overview.style.scss';

const CollectionsOverView = ({collections})=>(
    <div className='collections-overview'>
        {
          collections.map(({id,...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps}/>))
        }
    </div>
)

const maptStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(maptStateToProps)( CollectionsOverView);
