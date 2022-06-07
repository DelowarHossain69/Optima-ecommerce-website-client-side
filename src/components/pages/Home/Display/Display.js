import React from "react";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <section className="my-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        <Link to="/">
          <div className=" overflow-hidden cursor-pointer">
            <img
              src="https://i.ibb.co/XstmJfk/banner33.jpg"
              alt=""
              className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </Link>

        <Link to="/">
          <div className=" overflow-hidden cursor-pointer">
            <img
              src="https://i.ibb.co/G3xKPdM/banner32.jpg"
              alt=""
              className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </Link>

        <Link to="/">
          <div className=" overflow-hidden cursor-pointer">
            <img
              src="https://i.ibb.co/hdjKpn1/banner31.jpg"
              alt=""
              className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Display;
