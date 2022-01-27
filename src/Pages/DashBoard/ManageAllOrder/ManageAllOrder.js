import React, { useEffect, useState } from "react";
import useStore from "../../../hooks/useStore";

const ManageAllOrder = () => {
  const [allPlaces, setAllPlaces] = useState([]);
  const { recall, setRecall } = useStore();

  useEffect(() => {
    fetch("https://blooming-reaches-46527.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllPlaces(data);
      });
  }, []);

  const handleDelete = (id) => {
    const isDelete = window.confirm("Are you sure?");
    if (isDelete) {
      fetch(`https://blooming-reaches-46527.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            const remaining = allPlaces.filter((booking) => booking._id !== id);
            setAllPlaces(remaining);
            alert("Delete successfully");
          }
        });
    }
  };

  const handleApprove = (id) => {
    const isConfirm = window.confirm("Are you sure it approved?");

    if (isConfirm) {
      fetch(`https://blooming-reaches-46527.herokuapp.com/approve/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            let finalPlaces = [];
            for (let place of allPlaces) {
              if (place._id === id) {
                place.status = "Approved";
              }
              finalPlaces.push(place);
            }
            setAllPlaces(finalPlaces);
            setRecall(!recall);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-center mb-3 pb-2 border-b uppercase font-bold">
        Manage All Place
      </h1>
      {allPlaces.map((place) => (
        <div
          key={place._id}
          className="border m-2 p-2 md:block sm:block lg:flex lg:h-96"
        >
          <img
            className="h-full md:w-full lg:mr-3 lg:w-2/3"
            src={place?.booked.image}
            alt=""
          />
          <div>
            <h1 className="text-center my-3 text-xl uppercase font-bold">
              {place?.booked.name}
            </h1>
            <p>Booked user: {place.name}</p>
            <p>
              Address: {place.address},{place.district}
            </p>
            <p>Phone: {place.phone}</p>
            <p className="font-bold">
              Status: <span>{place.status}</span>
            </p>
            <p>Journey Start: {place.date}</p>
            <p>Duration: {place?.booked.duration} days</p>
            <div>
              <button
                onClick={() => handleDelete(place._id)}
                className="hover:bg-red-700 px-3 py-2 my-3 text-white bg-sky-800"
              >
                Delete
              </button>
              <button
                disabled={place.status === "Approved"}
                onClick={() => handleApprove(place._id)}
                className={` px-3 py-2 my-3 text-white bg-sky-800 ${
                  place.status === "Approved"
                    ? "bg-slate-400"
                    : "hover:bg-green-700"
                }`}
              >
                Approved
              </button>
              <button
                // onClick={() => handleDelete(booking._id)}
                className="hover:bg-indigo-600 px-3 py-2 my-3 text-white bg-sky-800"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageAllOrder;
