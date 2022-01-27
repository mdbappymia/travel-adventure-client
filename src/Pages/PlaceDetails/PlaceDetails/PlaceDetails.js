import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import useStore from "../../../hooks/useStore";

const PlaceDetails = ({ id }) => {
  const [place, setPlace] = useState({});
  const { user, setUserBooking, userBooking } = useStore();
  useEffect(() => {
    fetch(`https://blooming-reaches-46527.herokuapp.com/place/${id}`)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, [id]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const isSubmit = window.confirm(
      "Are you sure your information is correct?"
    );
    if (isSubmit) {
      const submittedData = {
        name: user.displayName,
        email: user.email,
        user_id: user.uid,
        address: data.address,
        district: data.district,
        phone: data.phone,
        date: data.date,
        booked: place,
        status: "Pending",
      };
      fetch("https://blooming-reaches-46527.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submittedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Submitted successfully. You can see order from dashboard");
            setUserBooking([...userBooking, submittedData]);
            reset();
          }
        });
    }
  };
  return (
    <div className="container px-4 mx-auto grid md:grid-cols-2 py-7">
      <div className="w-11/12">
        <h1 className="text-3xl text-center my-3 uppercase">Fill the form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            defaultValue={user.displayName}
            disabled
            {...register("name")}
          />
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            defaultValue={user.email}
            disabled
            {...register("email")}
          />
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Your Address"
            {...register("address", { required: true })}
          />
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Your District"
            {...register("district", { required: true })}
          />
          <input
            type="number"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Your Phone Number"
            {...register("phone", { required: true })}
          />

          <label className="text-xl">Journey Date:</label>
          <input
            type="date"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            {...register("date", { required: true })}
          />

          <input
            className="bg-sky-900 text-white px-4 py-2 hover:bg-sky-800 rounded"
            type="submit"
          />
        </form>
      </div>
      <div>
        <h1 className="text-center my-5 text-4xl font-bold uppercase">
          {place.name}
        </h1>
        <img src={place.image} alt="" />
        <div>
          <div className="text-center my-4">
            Rating:{" "}
            <Rating
              readonly
              initialRating={place.rating}
              emptySymbol={<i className="far fa-star text-orange-500"></i>}
              fullSymbol={<i className="fas fa-star text-orange-500"></i>}
            />{" "}
            ({place.rating})
          </div>
          <p className="text-3xl my-3">
            Price: <span className="text-orange-600">${place.price}</span>
          </p>
          <p className="text-xl my-2">Location: {place.location}</p>
          <p>{place.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
