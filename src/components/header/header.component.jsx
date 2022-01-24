/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {auth} from '../../firebase/firebase.utils';

import {HeaderContainer, LogoContainer,
  OptionsContainer, Option} from './header.styles';

const Header = ({currentUser, hidden})=>{
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"/>
      </ LogoContainer>
      <OptionsContainer>
        <Option as={Link} to='/shop'>
            SHOP
        </Option>
        <Option as={Link} to='/'>
            CONTACT
        </Option>
        {
          // if the user exists (is logged in), change the button to signout
          // else change to signin to move user to signin page
          currentUser ?
          <Option as='div' onClick={() => auth.signOut()}>SIGN OUT</Option>:
          <Option as={Link} to='/signin'>SIGN IN</Option>
        }
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
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
