import React from 'react';

import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview-component/collection-preview.component'
import {selectCollectionFromPreview} from '../../redux/shop/shop.selector'

import './colection-overview.style.scss';

const CollectionOverview=({collections})=>(
    <div className='colections-overview'>
                    {
                        collections.map(({id,...otherCollectionProps}) =>(
                                <CollectionPreview
                                    key={id}
                                    {...otherCollectionProps}
                                />
                        ))
                    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionFromPreview
})
 

export default connect(mapStateToProps)(CollectionOverview)
