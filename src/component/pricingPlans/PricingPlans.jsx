import React from "react";
import "../../style/PricingPlans/pricingPlans.css";
import { LiaChevronRightSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";

export const PricingPlans = () => {
  return (
    <>
      {/* <h2 className="main-title text-center mb-5">PRICING PLANS</h2> */}
      <div className="pricing" id="packages">
        <div className="container">
          <div className="supSec">02</div>
          <div className="titelMain pricing">
            <h1>Pricing Plans </h1>
          </div>
          <div className="row parent">
            <div className="col box color1">
              <h3 className="title">Basic</h3>
              <img src="images/hosting-basic.png" alt="" />
              <div className="price">
                <span className="amount">$15</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick />
                  10GB HDD Space
                </li>
                <li>
                  <TiTick />5 Email Addresses
                </li>
                <li>
                  <TiTick />2 Subdomains
                </li>
                <li>
                  <TiTick />4 Databases
                </li>
                <li>
                  <TiTick />
                  Basic Support
                </li>
              </ul>
              <a href="#">Choose Plan</a>
            </div>
            <div className="col box popular color2">
              <div className="label">Most Popular</div>
              <h3 className="title">Advanced</h3>
              <img src="images/hosting-advanced.png" alt="" />
              <div className="price">
                <span className="amount">$25</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick />
                  20GB HDD Space
                </li>
                <li>
                  <TiTick />
                  10 Email Addresses
                </li>
                <li>
                  <TiTick />5 Subdomains
                </li>
                <li>
                  <TiTick />8 Databases
                </li>
                <li>
                  <TiTick />
                  Advanced Support
                </li>
              </ul>
              <a href="#">Choose Plan</a>
            </div>
            <div className="col box color3">
              <h3 className="title">Professional</h3>
              <img src="images/hosting-professional.png" alt="" />
              <div className="price">
                <span className="amount">$45</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick /> 50GB HDD Space
                </li>
                <li>
                  <TiTick /> 20 Email Addresses
                </li>
                <li>
                  <TiTick /> 10 Subdomains
                </li>
                <li>
                  <TiTick /> 20 Databases
                </li>
                <li>
                  <TiTick /> Basic Support
                </li>
              </ul>
              <a href="#">Choose Plan</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
