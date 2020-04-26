import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {SelectCartItems, selectCartTotal} from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';



const CheckoutPage =({cartItems, total})=>(
    <div className='checkout-page'>
            CHECK OUT PAGE
            <br></br>
            <div className='checkout-header'>
                <div className='checkout-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-block'>
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem=><CheckoutItem  key={cartItem.id} cartItem={cartItem} />  )
            }
            <div className='total' >TOTAL: {total }</div>
    </div>  
);

const MapSatetToProps =createStructuredSelector({
    cartItems:SelectCartItems,
    total:selectCartTotal
})
    

export default connect(MapSatetToProps)(CheckoutPage);