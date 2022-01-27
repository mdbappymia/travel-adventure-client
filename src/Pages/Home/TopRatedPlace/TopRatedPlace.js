import React, { useEffect, useState } from "react";
import Place from "../Place/Place";

const TopRatedPlace = () => {
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPlaces")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          return b.rating - a.rating;
        });
        setTopRated(data.slice(0, 5));
      });
  }, []);
  return (
    <>
      <h1 className="text-center font-bold text-3xl my-5 uppercase">
        Top rated place
      </h1>
      <div className="max-h-screen overflow-scroll">
        {topRated.map((place) => (
          <Place key={place._id} place={place} />
        ))}
      </div>
    </>
  );
};

export default TopRatedPlace;
