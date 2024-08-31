import React from "react";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../style/hero/hero.css";

export const HeroImage = () => {
  return (
    <>
      <div className="hero">
        <div className="overlay"></div>
        <div className="container">
          <div className="infoHero">
            <div className="title">
              <h1>Wave</h1>
              <h1>Agency</h1>
            </div>
            <div className="social">
              <a href="#">
                <FaBehance />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
