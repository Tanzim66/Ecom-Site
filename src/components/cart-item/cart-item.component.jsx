/* eslint-disable react/prop-types */
import React from 'react';

import {CartItemContainer, Image, ItemDetailsContainer}
  from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
