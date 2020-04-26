import React from 'react';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'

import CustomButton from '../custom-button/custon-buttom.component';
import {SelectCartItems} from '../../redux/cart/cart.selector'
import {withRouter} from 'react-router-dom';
import {ToggleCartHidden} from '../../redux/cart/cart.action';



const CartDropdown =({cartItems,history,dispatch })=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

                cartItems.length  ?
                (cartItems.map(cartItem=> (<CartItem key={cartItem.id} item={cartItem} />) ))
                :
                (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout')
            dispatch(ToggleCartHidden())
            } }  > GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToPtops= (state) =>({
    cartItems: SelectCartItems(state)
})
export default withRouter (connect(mapStateToPtops)(CartDropdown));