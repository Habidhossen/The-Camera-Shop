import React from "react";
import banner from "../../assets/images/banner_img.jpeg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* banner section */}
      <div className="banner-section items-center grid grid-cols-2 container mx-auto">
        <div>
          <h1 className="banner-title">
            Capture Your <span>Beautiful</span> Moments
          </h1>
          <p className="banner-text">
            Discover a world of visual expression and capture your favorite
            moments with precision and style with the best cameras.
          </p>
          <button className="banner-btn">Buy Now</button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>

      {/* 3 customer reviews */}
      <div className=""></div>
    </div>
  );
};

export default HomePage;
