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
            src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
          />
          <h1 className="legend ">Where the journey begins!</h1>
        </div>
        <div>
          <img
            alt="slider-2"
            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <p className="legend">We make dreams come true!</p>
        </div>
        <div>
          <img
            alt="slider-3"
            src="https://thumbs.dreamstime.com/b/happy-couple-love-travel-raised-hands-cliff-happy-couple-love-travel-raised-hands-cliff-norway-man-woman-112188598.jpg"
          />
          <p className="legend">Traveling opens door to creating memories.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
