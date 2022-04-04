import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./ClientReviews.css";

const ClientReviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="reviews-container">
      <h1 className="reviews-customer-title">
        Our Happy <span>Customer</span> Say!
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-6 container mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
