import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/404_img.svg";

const NotFound = () => {
  return (
    <section className="grid grid-cols-2 container mx-auto">
      <div className="my-auto">
        <h1 className="mb-10 text-4xl font-bold">
          Oops! The page you're looking for isn't here.
        </h1>
        <Link
          to="/"
          className="w-full py-2 px-5 text-white bg-emerald-400 rounded-full"
        >
          Back to Home
        </Link>
      </div>
      <div>
        <img className="w-fit" src={image} alt="" />
      </div>
    </section>
  );
};

export default NotFound;
