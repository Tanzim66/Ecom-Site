/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {CartDropdownContainer, CartItemsContainer,
  EmptyMessage, ModifiedCustomButton} from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
          cartItems.map((item) =>
            <CartItem key={item.id} item={item}/>,
          ) :
          <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItemsContainer>
      <ModifiedCustomButton onClick={
        () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }
      }>
      GO TO CHECKOUT
      </ModifiedCustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
