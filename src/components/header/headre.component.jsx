import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.style.scss';
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selector' 
import {selectCurrentUser} from '../../redux/user/user.selector' 



const Header=({currentUser, hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop' >
                Shop
            </Link>
            <Link className='option' to ='/shop' >
                Contact
            </Link>
{
    currentUser ?( 
         <div className="option" onClick={()=>auth.signOut()}>SING OUT</div>
        
        ) : (
        
        <Link className='option' to='/signin' > SIGN IN</Link>
         ) 
}

    <CartIcon/>
        </div>
      {  hidden ? null: <CartDropdown/>}
    </div>

);

// function that allows us  to access the state with the state being are reducer our root reducer
// state=> top value root.reducer => distructor nestet values {user:{currentUser}}

// const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
//     // name of tha prop is the proo we pass in and value will be value
//     // currentUser:state.user.currentUser
//     currentUser, 
//     hidden
// })
const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);