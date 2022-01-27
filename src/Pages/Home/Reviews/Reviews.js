import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Carousel } from "react-responsive-carousel";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div id="reviews" className="review-container container px-4 mx-auto my-5">
      <h1 className="text-center font-bold uppercase text-4xl mb-3">
        <span className="border-b-2 pb-3">Reviews</span>
      </h1>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        dynamicHeight={true}
        // showStatus={false}
      >
        {reviews?.map((review) => (
          <div key={review._id} className="h-48">
            <h1 className="font-bold capitalize text-2xl my-3">
              {review.name}
            </h1>
            <div className="text-center mb-4">
              Rating:{" "}
              <Rating
                readonly
                initialRating={review.rate}
                emptySymbol={<i className="far fa-star text-orange-500"></i>}
                fullSymbol={<i className="fas fa-star text-orange-500"></i>}
              />{" "}
              ({review.rate})
            </div>
            <p>{review.message}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;
