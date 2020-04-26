import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

import{createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectDirectorySelections} from '../../redux/directory/directory.selector'

const Directory = ({sections})=>(

  <div className='directory-menu'>
    {sections.map(({id, ...otherProps}) =>(
        <MenuItem
            key={id}
            {...otherProps}
        />
    ))}
  </div>

);
   
const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySelections
});
    

export default connect(mapStateToProps)(Directory);