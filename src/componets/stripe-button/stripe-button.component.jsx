import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishhableKey ='pk_test_51Gue6sFrQWpIfAvdDpdnbEbI8REPFZRRf7nNtPjSYgghZ8ZRnHpglgDswELKyGBC2yN7nFNSxau2LNA7UHYdPzXq00prdr07Xn';

   const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name ='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/Cu%3C.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishhableKey}
        />
    )

};

export default StripeCheckoutButton;