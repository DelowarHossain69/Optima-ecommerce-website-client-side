import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Payment = ({paymentInfo, setPaymentLoadingStatus}) => {
  return (
    <Elements stripe={stripePromise}>

      <CheckoutForm
        paymentInfo={paymentInfo} 
        setPaymentLoadingStatus={setPaymentLoadingStatus}
       />

    </Elements>
  );
};

export default Payment;
