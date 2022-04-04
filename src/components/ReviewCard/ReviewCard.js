import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { name, msg, rating, image } = review;

  return (
    <div className="custom-card">
      <img className="card-img" src={image} alt="" />
      <p className="card-rating">
        Rating: <span className="font-semibold">{rating}</span>{" "}
        <FontAwesomeIcon icon={faStar} />
      </p>
      <p className="card-text">&#8220; {msg} &#8221;</p>
      <h1 className="card-title">&#8212; {name}</h1>
    </div>
  );
};

export default ReviewCard;
