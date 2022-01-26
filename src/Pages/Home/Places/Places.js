import React from "react";
import useStore from "../../../hooks/useStore";
import Place from "../Place/Place";
import "./Places.css";
const Places = () => {
  const { places, setPage, pageCount, page } = useStore();
  return (
    <div>
      <h1 className="text-center text-4xl my-10 font-bold">PLACES</h1>
      <div className="place-container container px-4 mx-auto">
        {places.map((place) => (
          <Place key={place._id} place={place} />
        ))}
      </div>
      <div className="pagination container px-4 mx-auto">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={`${
              number === page ? "color-white bg-slate-600" : ""
            } border-4 px-3 py-2`}
            onClick={() => setPage(number)}
            key={number}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Places;
