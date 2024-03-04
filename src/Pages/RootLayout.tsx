import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import ScrollToTop from "../util/scrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
