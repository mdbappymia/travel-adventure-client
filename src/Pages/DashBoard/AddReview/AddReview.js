import React, { useState } from "react";
import Rating from "react-rating";
import useStore from "../../../hooks/useStore";

const AddReview = () => {
  const [rate, setRate] = useState(5);
  const [message, setMessage] = useState("");
  const { user } = useStore();

  const submitReview = (e) => {
    e.preventDefault();
    const review = {
      rate: rate,
      name: user.displayName,
      user_id: user.uid,
      message: message,
      status: "pending",
    };
    const isReview = window.confirm("Are you sure information is correct?");
    if (isReview) {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Review added successfully");
            e.target.reset();
          }
        });
    }
  };
  return (
    <div className="bg-dark pb-5">
      <div>
        <h1 className="text-center py-5 uppercase text-3xl">Add Your Review</h1>
        <div className="text-center">
          <label>Your Rate: {rate}</label>
          <br />
          <Rating
            initialRating={rate}
            onClick={(value) => setRate(value)}
            emptySymbol={<i className="far fa-star text-green-500"></i>}
            fullSymbol={<i className="fas fa-star text-green-500"></i>}
          />
        </div>
        <br />
        <form onSubmit={submitReview}>
          <label>Your Message:</label>
          <textarea
            onBlur={(e) => setMessage(e.target.value)}
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="mt-3 px-5 py-2 text-white rounded hover:bg-sky-800 bg-sky-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
