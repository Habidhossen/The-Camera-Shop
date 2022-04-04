import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/banner_img.jpeg";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./HomePage.css";

const HomePage = () => {
  // custom hooks
  const [reviews, setReviews] = useReviews();

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
          <button className="banner-btn">
            Explore Now <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
        <div>
          <img src={banner} alt="" />
        </div>
      </div>

      {/* 3 customer reviews */}
      <div className="home-customer-reviews-container py-8">
        <h1 className="reviews-customer-title">
          Customer <span>Reviews(3)</span>
        </h1>
        <div className="grid grid-cols-3 gap-6 container mx-auto">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/reviews" className="see-reviews-btn">
            See All Reviews <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
