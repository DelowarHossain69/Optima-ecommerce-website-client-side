import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2GiKA5NiZMUTJ42BNhcx2ATOkpZ6GKYw73nNQQj1eMEc08E9pYzCGX2vvw8evoFztJuICCsOo52Z65lMxZdG2y0068ovf5xd');

const Payment = ({paymentInfo}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm paymentInfo={paymentInfo} />
    </Elements>
  );
};

export default Payment;
