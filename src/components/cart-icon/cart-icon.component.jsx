import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

import './cart-icon.style.scss';

import {connect} from 'react-redux'
import {ToggleCartHidden} from '../../redux/cart/cart.action'

const CartIcon=({ToggleCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
  
const mapDispatchToProps= dispatch=>({
    ToggleCartHidden:()=>dispatch(ToggleCartHidden())
})

const mapStateToProps= (state)=>({
    itemCount:selectCartItemsCount(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
