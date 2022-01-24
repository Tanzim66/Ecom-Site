/* eslint-disable react/prop-types */
import React from 'react';

import {connect} from 'react-redux';
import {removeItem, addItem, decreaseItemQuantity}
  from '../../redux/cart/cart.actions';

import {CheckoutItemContainer, ImageContainer,
  Image, Name, Quantity, Price, Arrow, Value,
  RemoveButton} from './checkout-item.styles';

const CheckoutItem = ({cartItem, removeItem,
  addItem, decreaseItemQuantity}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image alt="item" src={imageUrl}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() =>
          decreaseItemQuantity(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton
        onClick={() => removeItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};


const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
