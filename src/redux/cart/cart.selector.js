import {createSelector} from 'reselect'



// input selector

const SelectCart =state =>state.cart;

export const SelectCartItems= createSelector(
    //  collection of  input selectors, second arg function that we return the value we want out of the selector
    [SelectCart],(cart)=>cart.cartItems
);
export const selectCartItemsCount = createSelector(
    [SelectCartItems],(cartItems)=>cartItems.reduce((accumulatedQuantity, cartItem)=>accumulatedQuantity+cartItem.quantity,0)
);

export const selectCartHidden=createSelector(
    [SelectCart],(cart)=>cart.hidden
);

export const selectCartTotal=createSelector(
    [SelectCartItems],(cartItems)=>cartItems.reduce((accumulatedQuantity, cartItem)=>accumulatedQuantity+cartItem.quantity*cartItem.price ,0)
)


