import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./../PrimaryProductCard/PrimaryProductCard";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Collection = () => {
  const { data: latestProducts, isLoading } = useQuery("latestProducts", () =>
    fetch("http://localhost:5000/latestProducts").then((res) => res.json())
  );
 
  if(isLoading){
    return <Loading />
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl mb-4">Latest Products</h2>
      {/* Collection Banner */}
      <div className=" overflow-hidden">
        <div className="hover:scale-105 duration-500">
          <Link to="/">
            <img
              src="https://i.ibb.co/M7bg8zr/banner37.jpg"
              className="w-full"
              alt=""
            />
          </Link>
        </div>
      </div>

      {/* Collection body */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-2">
          <img
            src="https://i.ibb.co/0Vb483Q/cate2.jpg"
            className="hidden lg:block"
            alt=""
          />
        </div>

        <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
            {
              latestProducts?.map(product => <ProductCard product={product} />)
            }
        </div>
      </div>
    </section>
  );
};

export default Collection;
