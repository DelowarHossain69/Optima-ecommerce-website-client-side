import React, { useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useModal from "../../../hooks/useModal";
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ paymentInfo }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { id, img, name, orderQuantity, price } = paymentInfo;
  const {confirmAlert} = useModal();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if(price){
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ price }),
          })
            .then((res) => res.json())
            .then((secret) => setClientSecret(secret.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card : card,
    });

    setCardError(error?.message || "");
    
    // Confirm card payment
    const { paymentIntent, error: paymentConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name,
          },
        },
      });

      setCardError(paymentConfirmError?.message || '');

// After complete the payment
      if(paymentIntent?.id){
        confirmAlert('Your payment has been completed.')
        navigate('/');
      };
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "17px",
              color: "#424770",

              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="border-2 border-primary p-3 rounded-lg"
      />
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="btn btn-primary w-full mt-3 text-lg"
      >
        Pay Now
      </button>

      <p className="text-red-500 mt-3">{cardError}</p>
    </form>
  );
};

export default CheckoutForm;
