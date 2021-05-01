import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton =({price}) =>
{
    const priceForStripe = price *100;
    const publishableKey ='pk_test_51ImOzRKU1TXyfK1xbODqheEpAbuvNDgkK8kvYPwfEJJcSIz4DYVP12fVrIxVEurHVWJhQ6NG4Vdp30LQucChdtuO0011q1qujr';
    const ontToken = (token) => {
        console.log(token);
        alert('payment successful');
    }

    return (
        <StripeCheckout
            bitcoin={true}
            name='Moe Clothing'
            billingAddress ={true}
            shippingAddress ={true}
            image='https://svgshare.com/i/CUz.svg'
            description ={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token= {ontToken}
            stripeKey = {publishableKey}
            label='Pay now '
        />
    )
};

export default StripeCheckoutButton
