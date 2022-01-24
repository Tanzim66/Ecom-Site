/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import {CartIconContainer, ModifiedShoppingIcon,
  ItemCount} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ModifiedShoppingIcon/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
