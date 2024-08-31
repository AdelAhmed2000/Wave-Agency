import React from "react";
import { HeroImage } from "../../component/heroImage/HeroImage";
import { Option } from "../../component/option/Option";
import { CreativeTeam } from "../../component/creativeTeam/CreativeTeam";
import { Contact } from "../../component/contact/Contact";
import { OurFeatures } from "../../component/ourFeatures/OurFeatures";

export const Home = () => {
  return (
    <>
      <HeroImage />
      <OurFeatures />
      <Option />
      <CreativeTeam />
      <Contact />
    </>
  );
};
