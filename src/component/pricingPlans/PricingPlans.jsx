import React from "react";
import "../../style/PricingPlans/pricingPlans.css";
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
              <h3 className="title">BASIC</h3>
              <div className="price">
                <span className="amount">EG 3500</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick />
                  Marketing Plan
                </li>
                <li>
                  <TiTick />7 Design
                </li>
                <li>
                  <TiTick />
                  Video Reel
                </li>
                <li>
                  <TiTick />8 Content
                </li>
              </ul>
              <a href="#">Choose Plan</a>
            </div>
            <div className="col box popular color2">
              <div className="label">Most Popular</div>
              <h3 className="title">PREMIUM</h3>
              <div className="price">
                <span className="amount">EG 8500</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick />
                  Marketing Plan
                </li>
                <li>
                  <TiTick />
                  16 Design
                </li>
                <li>
                  <TiTick />3 Reel
                </li>
                <li>
                  <TiTick />
                  19 Content
                </li>
                <li>
                  <TiTick />
                  For Free: 4 Friday Design
                </li>
              </ul>
              <a href="#">Choose Plan</a>
            </div>
            <div className="col box color3">
              <h3 className="title">PRO</h3>
              <div className="price">
                <span className="amount">EG 5500</span>
                <span className="time">Per Month</span>
              </div>
              <ul>
                <li>
                  <TiTick /> Marketing Plan
                </li>
                <li>
                  <TiTick /> 12 Design
                </li>
                <li>
                  <TiTick /> 2 Video Reel
                </li>
                <li>
                  <TiTick /> 14 Content
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
