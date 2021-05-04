import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-button.styles.scss';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ImhgGGbCSPDoTYuHNO2RkMTL5yKMBMOEE3SyqdVRzpgtpl66DqrTx6LyzLjbo3FdrIEHJCxnUqlTSCgLVKkw09r00PKAXHvWs';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert('Payment successful');
        console.log(response);
      })
      .catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert('There was an issie with your payment.');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
