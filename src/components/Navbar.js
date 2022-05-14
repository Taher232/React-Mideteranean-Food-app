import React from "react";
import logo2 from "../assests/logo2.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo2} />
      </div>
      <div className="rightSide"> right side</div>
    </div>
  );
}

export default Navbar;
