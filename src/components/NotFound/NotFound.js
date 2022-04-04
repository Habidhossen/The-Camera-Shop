import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/404_img.svg";

const NotFound = () => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 container mx-auto">
      <div className="my-auto">
        <h1 className="mb-4 text-5xl font-bold">Oops!</h1>
        <p className="mb-6 text-xl">The page you're looking for isn't here.</p>
        <Link
          to="/"
          className="w-full py-2 px-5 text-white bg-emerald-700 rounded-full"
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
