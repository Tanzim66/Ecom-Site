/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {auth} from '../../firebase/firebase.utils';


import './header.styles.scss';

const Header = ({currentUser, hidden})=>{
  return (
    <div className="header">
      <Link className='logo-container' to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/'>
            CONTACT
        </Link>
        {
          // if the user exists (is logged in), change the button to signout
          // else change to signin to move user to signin page
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>:
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// Tells redux to take the root state and get the currentUser
// from the user field
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// Tells redux to replace currentUser prop with the current user
// from the mapStateToProps function
export default connect(mapStateToProps)(Header);
