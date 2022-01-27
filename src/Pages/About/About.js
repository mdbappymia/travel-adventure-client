import React from "react";
import AppBar from "../Shared/AppBar/AppBar";
import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <>
      <AppBar />
      <div className="container px-4 mx-auto">
        <h1 className="text-center text-5xl uppercase lg:my-28 sm:my-12">
          About
        </h1>
        <p className="text-2xl">
          Adventure.Travel is the go-to source for information on adventure
          travel that prioritizes sustainability, serves as a force for good,
          and transforms people and places. From research and trends to best
          travel practices, ideal gear, and destinations and operators with
          outstanding commitments to responsible travel, we have everything you
          need to make sure your adventures align with your values.
          Life-changing travel must also be sustainable travel. By bringing
          together a growing community of people committed to traveling
          thoughtfully and considerately, we help shape the adventure and
          eco-tourism industry as it grows. In response to travelers’ desires,
          tour operators, destinations and travel advisors are increasingly
          working to ensure their experiences provide an unforgettable journey
          in a responsible, sustainable way. Such commitment in turn honors the
          people, environment and economies of incredible destinations around
          the world. Through compelling images and well-crafted stories,
          research and curated news of interest, Adventure.Travel inspires the
          curious to try new destinations, branch out in their activities,
          interact deeply with nature, and experience different cultures in the
          most respectful way possible.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10">
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">RESPECTING COMMUNITY FIRST</p>
          </div>
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">
              BUYING LOCAL AND SUSTAINABLE (NOT MASS PRODUCED AND NOT WILDLIFE
              PRODUCTS)
            </p>
          </div>
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">PROTECTING ANIMALS</p>
          </div>
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">LEAVING ONLY MEMORIES BEHIND</p>
          </div>
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">RESPECTING COMMUNITY FIRST</p>
          </div>
          <div className="p-3 m-3 border-2 bg-lime-50 text-center hover:scale-105">
            <i className="fas fa-hands-helping text-6xl my-3 text-yellow-700"></i>
            <p className="text-3xl my-2">SAVING WILD PLACES</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
