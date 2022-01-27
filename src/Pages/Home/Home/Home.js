import React from "react";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Places from "../Places/Places";
import Reviews from "../Reviews/Reviews";
import TopRatedPlace from "../TopRatedPlace/TopRatedPlace";
import "./Home.css";
const Home = () => {
  return (
    <>
      <AppBar />
      <div className="home-container">
        <div>
          <Header />
          <Places />
          <Reviews />
        </div>
        <div>
          <TopRatedPlace />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
