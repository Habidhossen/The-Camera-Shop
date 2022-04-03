import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="py-5 shadow-sm sticky top-0">
      <div className="flex justify-between container mx-auto">
        <div>
          <h1 className="nav-logo">
            <Link to="/">The Camera Shop</Link>
          </h1>
        </div>
        <nav>
          <CustomLink to="/" className="nav-item">
            HOME
          </CustomLink>
          <CustomLink to="/reviews" className="nav-item">
            REVIEWS
          </CustomLink>
          <CustomLink to="/dashboard" className="nav-item">
            DASHBOARD
          </CustomLink>
          <CustomLink to="/blogs" className="nav-item">
            BLOGS
          </CustomLink>
          <CustomLink to="/about" className="nav-item">
            ABOUT
          </CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
