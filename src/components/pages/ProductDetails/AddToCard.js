import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  deleteItemFromLocalStorage,
  getProductFromLocalStorage,
} from "../../../Utilities/localStorage";
import AddToCardItem from "./AddToCardItem";
import { faMoneyBill1Wave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useModal from './../../../hooks/useModal';

const AddToCard = () => {
  const {confirmModal,confirmModalWithSuccessAlert} = useModal();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedData = getProductFromLocalStorage();
    setProducts(storedData);
  }, []);

  //   Delete a ( add to card item) form localStorage;
  const deleteItem = (id) => {
      confirmModal(function(){
        const restItems = deleteItemFromLocalStorage(id);
        setProducts(restItems);
      });
  };

  //   Delete all card items;
  const deleteAllCardItems = () => {
    confirmModalWithSuccessAlert(function(){
        localStorage.clear();
        setProducts([]);
    })
  };

  // Calculate
  let price = 0;
  let quantity = 0;

  products?.map((product) => {
    price += product.totalAmount;
    quantity += product.orderQuantity;
  });

  return (
    <section className="py-12 mx-3 lg:mx-0">
      <h2 className="text-2xl mb-5">You added</h2>

      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8">
        <div className="w-full lg:w-4/6">
          {products?.map((product) => (
            <AddToCardItem product={product} deleteItem={deleteItem} />
          ))}
        </div>

        {/* side bar */}
        <div className="w-full lg:w-2/6 shadow-lg p-5 rounded flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-lg mb-3 font-semibold">Order summery</h2>
            <h3>Total Amount : ${price}</h3>
            <h3>Quantity : {quantity} piece</h3>
          </div>

          <div className="flex justify-around mt-5">
            <button className="btn w-32 bg-primary text-black border-0 hover:bg-[#fedc1bdc] text-lg">
              <FontAwesomeIcon icon={faMoneyBill1Wave} className="mr-2" />
              Pay
            </button>
            <button className="btn w-32 bg-[#fb5200] border-0 hover:bg-[#fb5400e1] text-lg font-normal" onClick={deleteAllCardItems}>
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCard;
