import React from "react";
import { useParams } from "react-router-dom";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const PlaceDetailsHome = () => {
  const { id } = useParams();
  return (
    <div>
      <AppBar />
      <PlaceDetails id={id} />
      <Footer />
    </div>
  );
};

export default PlaceDetailsHome;
