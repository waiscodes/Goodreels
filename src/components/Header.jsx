import React from "react";
import Nav from "./Nav";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">good<strong className="logo-reels">reels</strong></h1>
        <Nav />

      </header>
    </>
  );
};
export default Header;
