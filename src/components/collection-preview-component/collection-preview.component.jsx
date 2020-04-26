import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'
// de fiecare data cand aceasta componenta este randata lantul acela de modificari asupra array-ului este apelat de fiecare data ( {div-ul din clasa preview})


 
const CollectionPreview =({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx)=>idx<4)
                .map((item)=>(
                    <CollectionItem 
                         key={item.id}
                        //  {...otherItemProps}
                        item={item}

                    />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;