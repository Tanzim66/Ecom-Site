/* eslint-disable react/prop-types */
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser})=>{
  return (
    <div className="header">
      <Link className='logo-container' to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>
            SHOP
        </Link>
        <Link className="option" to='/shop'>
            CONTACT
        </Link>
        {
          // if the user exists (is logged in), change the button to signout
          // else change to signin to move user to signin page
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>:
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  );
};

// Tells redux to take the root state and get the currentUser
// from the user field
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

// Tells redux to replace currentUser prop with the current user
// from the mapStateToProps function
export default connect(mapStateToProps)(Header);
