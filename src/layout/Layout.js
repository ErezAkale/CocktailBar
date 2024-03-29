import React from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import "./style.css";

export const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
