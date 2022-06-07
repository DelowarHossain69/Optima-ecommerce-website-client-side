import React from "react";
import ProductCard from "../../../shared/PrimaryProductCard/PrimaryProductCard";

const BestSell = () => {
  return (
    <section className="my-12">
      <h2 className="text-2xl uppercase mb-5">Best Sellers</h2>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
        <div className="col-span-3 bg-gray-100 p-3 rounded">
          <img
            src="https://i.ibb.co/JrmSx0W/woollen-bomer.jpg"
            className="max-w-full"
            alt=""
          />
          <div className="text-center">
            <h3 className="font-bold  text-2xl mb-3">Woollen Bomer</h3>
            <h3 className="font-bold text-xl">$ 100</h3>
            <button className="btn btn-primary mt-3">Add to card</button>
          </div>
        </div>
        <div className="col-span-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSell;