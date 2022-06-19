import { faMinus, faPlus, faTruck, faMoneyBill1Wave, faHouseLaptop, faBuildingCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { storeDataToLocalStorage } from "../../../Utilities/localStorage";
import Loading from "../../shared/Loading/Loading";
import Ratings from "../../shared/Ratings/Ratings";
import ReviewCard from "./ReviewCard";

const ProductDetails = ({sharePaymentInfo}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        setProduct(data)
        setLoading(false);
      });

  }, [id]);

  const {
    img,
    name,
    price,
    availableQuantity,
    ratings,
    totalSells,
    description,
    comments,
    _id
  } = product;

  // update product quantity one by one
  const addQuantity = () => {
    if (orderQuantity > 0 && orderQuantity < 5) {
      setOrderQuantity(orderQuantity + 1);
    }
  };

  // Remove product quantity one by one
  const removeQuantity = () => {
    if (orderQuantity > 1 && orderQuantity <= 5) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  // Build product invoice;
  let subTotal = orderQuantity * price;
  let shippingCharge = orderQuantity * 10;
  let totalAmount = subTotal + shippingCharge;

  // This information for store in localStorage and payment;
  const ProductInvoice = {
    name,
    totalAmount,
    orderQuantity,
    img,
    _id
  }

  // Store data in localStorage
  const productInfo = () =>{
    storeDataToLocalStorage(ProductInvoice);
  }

  // Share data for payment;
  const goToPayment = () => {
    sharePaymentInfo(ProductInvoice);
  }

  // Buy product
  const buyNow = () => {
    goToPayment();
    navigate('/paymentDetails');
  }

  // loading
  if(isLoading){
    return <Loading />
  }

  return (
    <section className="py-12 mx-5 lg:mx-0">
      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
        <div className="shadow-lg p-5 rounded flex flex-col lg:flex-row w-full lg:w-4/6 bg-white">
          <div className="flex-1">
            <img src={img} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl">{name}</h1>
            <p className="flex items-center my-1">
              <Ratings ratings={ratings} />
              <span className="ml-3 text-sm">{ratings} Reviews</span>
            </p>
            <h3>Total sells : {totalSells} piece</h3>
            <h3 className="my-2 text-2xl text-[#9e671f]">Price : ${price}</h3>
            <h3>Stock : {availableQuantity} piece</h3>
            <h3>Brand : No brand</h3>

            <div className="flex items-center space-x-3 mt-5">
              <button
                onClick={removeQuantity}
                className={`${orderQuantity === 1 && "text-gray-300"}`}
              >
                <FontAwesomeIcon icon={faMinus} className="text-2xl" />
              </button>
              <span className="text-2xl">{orderQuantity}</span>
              <button
                onClick={addQuantity}
                className={`${orderQuantity === 5 && "text-gray-300"}`}
              >
                <FontAwesomeIcon icon={faPlus} className="text-2xl" />
              </button>
            </div>

            <div className="flex space-x-5 mt-5">
              <button className="flex-1 btn border-0 text-black bg-primary p-2 rounded hover:bg-[#fedc1bde]" onClick={()=> productInfo()}>
                Add to card
              </button>
              <button className="flex-1 btn border-0 bg-[#F57224] text-white p-2 rounded hover:bg-[#f57124e9]" onClick={buyNow}>
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Product shipping info */}
        <div className="shadow-lg w-full lg:w-2/6  p-4 rounded space-y-5">

          <div className="flex items-center">
            <FontAwesomeIcon icon={faTruck} className='text-gray-500 w-1/6 text-xl mr-2' />
            <div className="flex items-center justify-between w-5/6">
              <div className="text-gray-400">
                <h4>Home Delivery</h4>
                <h4>7-8 days</h4>
              </div>
              <h3 className="font-bold">$55</h3>
            </div>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faMoneyBill1Wave} className='text-gray-500 w-1/6 text-xl mr-2' />
              <div className="text-gray-400">
                <h4>Cash on Delivery Available</h4>
              </div>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faHouseLaptop} className='text-gray-500 w-1/6 text-xl mr-2' />
              <div className="text-gray-400">
                <h4>7 Days Returns</h4>
                <h4 className="text-sm">Change of mind is not applicable</h4>
              </div>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faBuildingCircleExclamation} className='text-gray-500 w-1/6 text-xl mr-2' />
              <div className="text-gray-400">
                <h4>Warranty not available</h4>
              </div>
          </div>

          {/* Product summery */}

          <div>
              <h4 className="mb-3 font-bold text-gray-400">Product Summery</h4>
              
              <div className="flex items-center mb-2">
                <h2 className="flex-1">Price</h2>
                <h2 className="flex-1">: ${subTotal}</h2>
              </div>

              <div className="flex items-center mb-2">
                <h2 className="flex-1">Quantity</h2>
                <h2 className="flex-1">: {orderQuantity} piece</h2>
              </div>

              <div className="flex items-center mb-2">
                <h2 className="flex-1">Shipping</h2>
                <h2 className="flex-1">: ${shippingCharge}</h2>
              </div>

              <div className="flex items-center mb-2">
                <h2 className="flex-1">Discount</h2>
                <h2 className="flex-1">: 0%</h2>
              </div>

              <div className="flex items-center">
                <h2 className="flex-1">Total</h2>
                <h2 className="flex-1">:  ${totalAmount}</h2>
              </div>

          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <h3 className="text-3xl">90%</h3>
              <h5>Positive Seller Ratings</h5>
            </div>

            <div className="text-center">
              <h3 className="text-3xl">98%</h3>
              <h5>Ship on Time</h5>
            </div>

            <div className="text-center">
              <h3 className="text-3xl">83%</h3>
              <h5>Chat Response Rate</h5>
            </div>

          </div>

        </div>
      </div>

      <div className="mt-8">
        <p className="text-xl">{description?.text}</p>

        <ul className="list-disc mt-4">
          {description?.list?.map((item, index) => (
            <li key={index} className="leading-7">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <h4 className="text-2xl">
            Ratings & Reviews of <strong>{name}</strong>
          </h4>
          {/* Ratings details */}
          <div className="mt-5">
            <h4 className="text-5xl font-semibold mb-3">
              {ratings}
              <span className="text-2xl text-[#ada7a7]">/5</span>
            </h4>

            <Ratings ratings={ratings} style={`text-4xl`} />
            <p className="mt-2">{ratings} Ratings</p>
          </div>
          {/* Reviews */}
          <div className="mt-5">
            <h5 className="text-xl mb-2">Product Reviews</h5>
            <hr />

            {comments?.map((comment) => (
              <ReviewCard comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
