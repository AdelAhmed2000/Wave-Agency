import React from "react";
import "../../style/ourFeatures/ourFeatures.css";
import img1 from "../../image/ourFeatures/mission.svg";
import img2 from "../../image/ourFeatures/reliable.svg";
import img3 from "../../image/ourFeatures/experts.svg";
import img4 from "../../image/ourFeatures/friend.svg";
export const OurFeatures = () => {
  return (
    <>
      <div className="ourFeatures" id="Features">
        <div className="container">
          <div className="supSec">01</div>
          <div className="titelMain feature">
            <h1>Our Features</h1>
          </div>
          <div className="mainTitlelFeature text-center">
            <h2>We’re ready, when you are!.</h2>
            <p>
              Wave Digital Agency is a team of specialists at the top of our
              fields in Research, Creative Writing, Graphic Design, Social
              Media, Web Designs and more. Together, we provide a wide range of
              experience to help you grow your business.
            </p>
          </div>
          <div className="Experts">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="type text-center">
                  <img src={img1} alt="img1" />
                  <h3>Mission</h3>
                  <p>
                    We believe in building a great relationship with our clients
                    and that's what we aim to do, every time.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="type text-center">
                  <img src={img2} alt="img2" />
                  <h3>Reliable</h3>
                  <p>
                    Streamlined delivery, cost-effective projects, designed to
                    match your goals, timeline and budget.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="type text-center">
                  <img src={img3} alt="img3" />
                  <h3>Experts</h3>
                  <p>
                    Our experts are trained, certified and experienced across a
                    variety of E-Marketing.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="type text-center">
                  <img src={img4} alt="img4" />
                  <h3>Satisfaction</h3>
                  <p>
                    Dedicated account manager, project manager and consistent
                    delivery team provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
