import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
      >
        <div>
          <img
            alt="slider-1"
            className="w-100"
            src="https://www.planetware.com/wpimages/2020/07/world-best-luxury-all-inclusive-resorts-the-brando.jpg"
          />
          <h1 className="legend ">Where the journey begins!</h1>
        </div>
        <div>
          <img
            alt="slider-2"
            src="https://www.planetware.com/wpimages/2020/07/world-best-luxury-all-inclusive-resorts-lux-south-ari-atoll-maldives.jpg"
          />
          <p className="legend">We make dreams come true!</p>
        </div>
        <div>
          <img
            alt="slider-3"
            src="https://www.planetware.com/wpimages/2020/07/world-best-luxury-all-inclusive-resorts-four-seasons-tented-camp-golden-triangle-thailand.jpg"
          />
          <p className="legend">Traveling opens door to creating memories.</p>
        </div>
        <div>
          <img
            alt="slider-4"
            src="https://www.planetware.com/photos-large/CAY/luxury-caribbean-resorts-jade-mountain.jpg"
          />
          <p className="legend">Make your next trip awesome</p>
        </div>
        <div>
          <img
            alt="slider-5"
            src="https://www.planetware.com/photos-large/CAY/south-africa-safari-lodges-royal-malewane.jpg"
          />
          <p className="legend">Travel agents with cheap flights</p>
        </div>
        <div>
          <img
            alt="slider-6"
            src="https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg"
          />
          <p className="legend">We know the right people</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
