import React, { Fragment } from "react";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
