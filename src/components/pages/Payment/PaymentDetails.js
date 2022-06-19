import React, { useState } from "react";
import Payment from "./Payment";

const PaymentDetails = ({ paymentInfo }) => {
  const { _id, img, name, orderQuantity, totalAmount } = paymentInfo;
  const [discountAmount, setDiscountAmount] = useState(0);
  
  const offersInfo = {
    title : '',
    issue: '',
    expire : '12-12-22',
    discount : 50,
    promoCode : 'abc'
  }

  //   Calculate

  const total = totalAmount - discountAmount;

  //   Promo code
  const getOff = (e) => {
    e.preventDefault();
    const promoCode = e.target.offer.value;
    
    if(promoCode === offersInfo.promoCode){
        alert(`Congratulation you got ${offersInfo.discount} OFF`);
        setDiscountAmount(offersInfo.discount);
    }
    else{
        alert('Invalid promo code');
    }
  };

//   updated product info after discount;
  const paymentInformation = {
    name,
    img,
    orderQuantity,
    id : _id,
    price : total
  }

  return (
    <section className="py-12 mx-3 lg:mx-0">
      <h2 className="text-2xl mb-3">Payment details</h2>

      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-5 lg:space-y-0">
        {/* Product details */}
        <div className="shadow-lg p-5 rounded flex-1">
          <img src={img} alt="product" className="max-w-xs mx-auto" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="">
              <h3 className="text-2xl mb-2">{name}</h3>
              <h3 className="text-lg mb-2">
                Order Quantity : {orderQuantity} piece
              </h3>
              <h3 className="text-lg mb-2">Price : ${totalAmount}</h3>
              <h3 className="text-lg mb-2">Discount : ${discountAmount}</h3>
              <h3 className="text-lg mb-2">Total Amount : ${total}</h3>
            </div>

            <div className="flex items-end">
              <form
                action=""
                className="relative w-full max-w-xs"
                onSubmit={getOff}
              >
                <input
                  type="text"
                  placeholder="PROMO CODE"
                  name="offer"
                  class="input input-bordered border-primary w-full rounded-full"
                />
                <button className="btn btn-primary absolute top-0 right-0 w-28 rounded-full" disabled={discountAmount}>
                  GET OFF
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Payment method  */}
        <div className="flex-1 shadow-lg p-5">
            <h2 className="text-2xl text-center mb-5">Please complete your payment</h2>
            <Payment paymentInfo={paymentInformation} />
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
