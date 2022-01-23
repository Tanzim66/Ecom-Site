/* eslint-disable react/prop-types */
import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  // eslint-disable-next-line max-len
  const publishableKey = 'pk_test_51KL0g5GrO1j6SCcUi6vx7iSAn9xTSOPO6pHGfbWEIyWncXEQRzKNqQWgVHxkT4ejHYFcnPYWXy5NvypLZ919hWEE00n03qeAxl';

  const ontoken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={ontoken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
