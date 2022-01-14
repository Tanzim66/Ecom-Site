/* eslint-disable react/prop-types */
import React from 'react';

import {connect} from 'react-redux';
import {removeItem, addItem, decreaseItemQuantity}
  from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeItem,
  addItem, decreaseItemQuantity}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() =>
          decreaseItemQuantity(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button"
        onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
