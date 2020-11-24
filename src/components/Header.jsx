import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">
            good<strong className="logo-reels">reels</strong>
          </h1>
        </Link>

        <Nav />
      </header>
    </>
  );
};
export default Header;
