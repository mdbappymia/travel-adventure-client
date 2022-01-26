import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.rating > 5 || data.rating < 0) {
      alert("Rating should be 0 to 5");
      return;
    }
    let isAdded = window.confirm("Are you sure this information is correct?");
    if (isAdded) {
      fetch("http://localhost:5000/places", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            reset();
            alert("Data place successfully");
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-center text-4xl mb-5">Add a new place</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Place Name"
            {...register("name", { required: true })}
          />
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Location"
            {...register("location", { required: true })}
          />
          <input
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            placeholder="Image Link"
            {...register("image", { required: true })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            placeholder="Cost"
            type="number"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            {...register("price", { required: true })}
          />
          <textarea
            rows={5}
            placeholder="Description"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            {...register("description", { required: true })}
          />
          <input
            type="number"
            placeholder="Duration"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            {...register("duration", { required: true })}
          />
          <input
            type="number"
            placeholder="Rating (0-5)"
            className="border-2 border-black w-full my-3 p-2 text-2xl rounded-md"
            {...register("rating", { required: true })}
          />
          <br />
          <br />

          <input
            className="px-3 py-2 bg-sky-900 text-white cursor-pointer hover:bg-sky-800 rounded"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
