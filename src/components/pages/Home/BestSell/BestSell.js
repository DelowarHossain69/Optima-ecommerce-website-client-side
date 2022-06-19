import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../../shared/PrimaryProductCard/PrimaryProductCard";
import Ratings from "../../../shared/Ratings/Ratings";
import Loading from '../../../shared/Loading/Loading';

const BestSell = () => {
  // get popular product
  const { data: products, isLoading } = useQuery("homepageProducts", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );

  // get most popular product
  const {data:mostSold} = useQuery('mostSold', ()=> 
    fetch('http://localhost:5000/topSelling')
    .then(res => res.json())
  );

  if(isLoading){
    return <Loading />
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl uppercase mb-5">Top Selling</h2>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
        <div className="col-span-3 bg-gray-100 rounded shadow-lg">
          <img
            src={mostSold?.img}
            className="w-full"
            alt="popular product"
          />
          <div className="text-center lg:text-left p-4">
            <p className="flex items-center"><Ratings ratings={mostSold?.ratings}/> ({mostSold?.totalSells})</p>
            <h3 className="font-bold  text-2xl my-3">{mostSold?.name}</h3>
            <h3 className="font-bold text-xl">Price : $ {mostSold?.price}</h3>
            <button className="btn btn-primary mt-3">Add to card</button>
          </div>
        </div>
        <div className="col-span-5">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BestSell;
