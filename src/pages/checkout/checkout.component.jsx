/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal}
  from '../../redux/cart/cart.selectors';
import CheckoutItem
  from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from
  '../../components/stripe-btn/stripe-btn.component';

import {CheckoutPageContainer, CheckoutHeaderContainer,
  CheckoutHeaderBlock, Total, TestWarning, StripeButtonContainer}
  from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeaderContainer>
      {
        cartItems.map((cartItem) => <CheckoutItem key={cartItem.id}
          cartItem={cartItem}></CheckoutItem>)
      }
      <Total><span>TOTAL: ${total}</span></Total>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVC: 123
      </TestWarning>
      {total > 0 ?
      <StripeButtonContainer>
        <StripeCheckoutButton price={total}/>
      </StripeButtonContainer> : null}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
