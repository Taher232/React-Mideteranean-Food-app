import React from "react";
import logo5 from "../assests/logo5.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo5} />
        <div className="hiddenLinks"></div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/">Menu</Link>
        <Link to="/">About</Link>
        <Link to="/">Contacts</Link>
      </div>
    </div>
  );
}

export default Navbar;
