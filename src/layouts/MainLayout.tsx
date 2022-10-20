import React from "react";
import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import "../assets/scss/global.scss";
import { Outlet } from "react-router-dom";
type LayoutProp = {
  children?: JSX.Element;
}
const MainLayout= ({ children }:LayoutProp) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
