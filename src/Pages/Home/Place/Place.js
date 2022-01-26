import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Place = ({ place }) => {
  const { name, location, image, description, duration, price, _id, rating } =
    place;
  return (
    <div className="place-card m-3 border-2 p-3 hover:shadow-black hover:shadow-2xl hover:bg-gray-100">
      <img className="h-72 w-full" src={image} alt="" />
      <div>
        <h3 className="text-center font-bold text-xl text-green-900 my-5 uppercase">
          {name}
        </h3>
        <div className="text-center mb-4">
          Rating:{" "}
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<i className="far fa-star text-orange-500"></i>}
            fullSymbol={<i className="fas fa-star text-orange-500"></i>}
          />{" "}
          ({rating})
        </div>
        <p>{description.slice(0, 100)}</p>
      </div>
      <div className="mt-5 text-center text-lg">
        <p>Cost: ${price}</p>
        <p>
          <i className="fas fa-street-view mr-2"></i>
          {location}
        </p>
        <p>Duration of tour: {duration} days</p>
        <Link to={`/placeDetails/${_id}`}>
          <button className="my-3 bg-sky-900 text-white px-3 py-2 rounded hover:bg-sky-800">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Place;
