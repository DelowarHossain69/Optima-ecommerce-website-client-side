import React from 'react';
import Swal from "sweetalert2";

const ReviewImage = () => {
    return (
        <img
          src="https://i.ibb.co/WHCz2QK/0c7f19e3-e4b6-46b9-9a9f-2aab0cb446c1.jpg"
          alt="review photos"
          className=" w-24 h-24 rounded cursor-pointer mr-3"
          onClick={() =>
            Swal.fire({
              imageUrl: "https://i.ibb.co/WHCz2QK/0c7f19e3-e4b6-46b9-9a9f-2aab0cb446c1.jpg",
              imageHeight: 300,
              imageAlt: "Review image",
            })
          }
        />
    );
};

export default ReviewImage;