import React from "react";
import "../../style/contact/contact.css";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const Contact = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h4>Get In Touch</h4>
              <form>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                />
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email Address"
                />
                <textarea
                  name="message"
                  id="textArea"
                  placeholder="Comment Or Message"
                ></textarea>
                <button
                  className="btn btn-info mt-3"
                  type="submit"
                  onClick ={handelSubmit}
                >
                  Send
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="phone text-center">
                <p>Contact</p>
                <p>Phone</p>
                <p>01090984246</p>
                <p>Mail :</p>
                <p>waveagency5@gmail.com</p>
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
        </div>
      </div>
    </>
  );
};
