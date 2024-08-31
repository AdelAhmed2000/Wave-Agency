import React from "react";
import "../../style/option/option.css";
import { TbBrandDeliveroo, TbCameraCode, TbSocial } from "react-icons/tb";
import {
  MdContentPasteSearch,
  MdOutlineDesignServices,
  MdOutlineDeveloperMode,
} from "react-icons/md";

export const Option = () => {
  return (
    <>
      <div className="option" id="Services">
        <div className="container">
          <div className="titelOption">
            <div className="supSec">03</div>
            <div className="titelMain">
              <h1>Services</h1>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 ">
                <div className="contant">
                  <TbBrandDeliveroo />
                  <h3>Brand Identity</h3>
                  <p>
                    Logo, Tagline, Font, Color palette, Business cards and brand
                    guidelines.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ">
                <div className="contant">
                  <TbSocial />
                  <h3>
                    Social Media <br /> Marketing
                  </h3>
                  <p>
                    Content plan, Social media designs, <br /> Page moderation,
                    and digital media buying.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ">
                <div className="contant">
                  <MdOutlineDesignServices />
                  <h3>Graphic Design</h3>
                  <p>
                    Social media designs, Packaging designs, <br /> Outdoor
                    Billboard designs ,Brochures,
                    <br /> Posters and banners.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 ">
                <div className="contant">
                  <MdOutlineDeveloperMode />
                  <h3>UI/UX</h3>
                  <p>
                    Websites, Web apps and Mobile apps <br /> design.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contant">
                  <MdContentPasteSearch />
                  <h3>Content Marketing</h3>
                  <p>Social media content marketing</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="contant">
                  <TbCameraCode />
                  <h3>Commercial Photography</h3>
                  <p>Product Photography</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
