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
              <a href="https://beacons.ai/waveagency">
                <FaBehance />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563468660760"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/wave_agency1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/wave-agency-420545321/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
