import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewCard.css";

const ReviewCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="custom-card">
        <img
          className="card-img"
          src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
          alt=""
        />
        <p className="card-rating">
          Rating: 5.00 <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="card-text">
          &#8220; Very easy to use. No matter where you go, Canon Camera is the
          coolest, most happening thing around! Wow what great service, I love
          it! &#8221;
        </p>
        <h1 className="card-title">&#8212; Joel P.</h1>
      </div>
      <div className="custom-card">
        <img
          className="card-img"
          src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
          alt=""
        />
        <p className="card-rating">
          Rating: 5.00 <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="card-text">
          &#8220; Very easy to use. No matter where you go, Canon Camera is the
          coolest, most happening thing around! Wow what great service, I love
          it! &#8221;
        </p>
        <h1 className="card-title">&#8212; Joel P.</h1>
      </div>
      <div className="custom-card">
        <img
          className="card-img"
          src="https://workmacro.com/wp-content/uploads/2018/02/1-by-1-1024x1024.png"
          alt=""
        />
        <p className="card-rating">
          Rating: 5.00 <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="card-text">
          &#8220; Very easy to use. No matter where you go, Canon Camera is the
          coolest, most happening thing around! Wow what great service, I love
          it! &#8221;
        </p>
        <h1 className="card-title">&#8212; Joel P.</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
