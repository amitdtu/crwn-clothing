import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const stripeAmount = price * 1000;
    const publishableKey = 'pk_test_ivzDYVvN4znBx8cOXDqhNIfX00NTmk9Dry';

    const  onToken = (token) => {
        console.log(token);
        alert('Payment Success')
    }

    return(
        <StripeCheckout 
            name={'CRWN CLOTHING'}
            description={'Crown Clothing Ltd.'}
            token={onToken}
            stripeKey={publishableKey}
            amount={stripeAmount}
            currency={'USD'}
            label="Pay Now"
        />
    )
}

export default StripeCheckoutButton