import React from "react";
import useStore from "../../../hooks/useStore";

const ManageOrder = () => {
  const { userBooking, setUserBooking } = useStore();
  const handleDelete = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.acknowledged) {
            const remaining = userBooking.filter(
              (booking) => booking._id !== id
            );
            setUserBooking(remaining);
            alert("Delete successfully");
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-5xl uppercase mb-4 pb-2 border-b-2">
        Manage Your Booking
      </h1>
      {!userBooking.length && (
        <h1 className="text-center my-10">Your Booking is Empty</h1>
      )}
      <div className="booking-container grid lg:grid-cols-3 sm:grid-cols-1">
        {userBooking?.map((booking) => (
          <div key={booking._id} className="border m-2 p-2">
            <h1 className="text-center my-3 text-xl uppercase font-bold">
              {booking?.booked.name}
            </h1>
            <img className="h-40 w-full" src={booking?.booked.image} alt="" />
            <p className="font-bold">
              Status: <span>{booking.status}</span>
            </p>
            <p>Journey Start: {booking.date}</p>
            <p>Duration: {booking?.booked.duration} days</p>
            <button
              onClick={() => handleDelete(booking._id)}
              className="hover:bg-red-700 px-3 py-2 my-3 text-white bg-sky-800"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
