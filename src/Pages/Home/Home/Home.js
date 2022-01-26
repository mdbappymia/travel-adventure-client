import React from "react";
import AppBar from "../../Shared/AppBar/AppBar";
import Footer from "../../Shared/Footer/Footer";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Places from "../Places/Places";
import Reviews from "../Reviews/Reviews";
import "./Home.css";
const Home = () => {
  return (
    <>
      <AppBar />
      <Header />
      <Places />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
