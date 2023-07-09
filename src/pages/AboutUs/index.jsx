import React, { Fragment } from "react";
import "./index.css";
import AboutKodo from "./AboutKodo";
import AboutKolo1 from "./AboutKolo1";
import AboutUs1 from "./AboutUs1";
import Cta from "./Cta";

const AboutUs = () => {
  return (
    <Fragment>
      <section class="">
        <AboutUs1 />
        <Cta />
        <AboutKodo />
        <AboutKolo1 />
      </section>
    </Fragment>
  );
};

export default AboutUs;




