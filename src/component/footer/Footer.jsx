import React from "react";
import "../../style/footer/footer.css";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="pre-footer row">
            <ul className=" col-lg-4 col-md-6 col-sm-12 list  ">
              <li className="list-head">
                <h6 className="font-weight-bold">ABOUT US</h6>
              </li>
              <li className="list-body">
                <p>
                  Digital Marketing Brand Strategy SEO Optimization Content
                  Creation Social Media Marketing Pay-Per-Click (PPC) Email
                  Marketing Lead Generation Influencer Marketing Conversion Rate
                  Optimization
                </p>
              </li>
            </ul>
            <ul className="col-lg-4 col-md-6 col-sm-12 list  ">
              <li className="list-head">
                <h6 className="font-weight-bold">USEFUL LINKS</h6>
              </li>
              <li className="list-body">
                <div className="row">
                  <div className="col">
                    <a href="#">Home</a>
                    <a href="#Features">Features</a>
                  </div>
                  <div className="col">
                    <a href="#Services">Services</a>
                    <a href="#packages">packages</a>
                    <a href="#Team">Team</a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className=" col-lg-4 col-md-6 col-sm-12 list ">
              <li className="list-head">
                <h6 className="font-weight-bold">CONTACT INFO</h6>
              </li>
              <li className="list-body">
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p>
                  <i className="ti-location-pin"></i> 01090984246
                </p>
                <p>
                  <i className="ti-email"></i> waveagency5@gmail.com
                </p>
                <div className="social-links">
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-facebook"></i>
                  </a>
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-twitter-alt"></i>
                  </a>
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-google"></i>
                  </a>
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-pinterest-alt"></i>
                  </a>
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="link">
                    <i className="ti-rss"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="social">
            <a href="#">
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
          <div className="copy text-center">
            <b>Copyright © 2024 - Wave </b>
          </div>
        </div>
      </div>
    </>
  );
};
