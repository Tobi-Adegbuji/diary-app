import React from "react";
import Diary from "./diary/Diary";
import "./SideNav.css";

function SideNav() {
  return (
    <nav id="mySideNav" className="sideNav">
      <img
        className="profile_img"
        src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png"
      />
      <p>John Doe</p>
      <div className="nav_divider_top"></div>
      <a href="#">Add Diary</a>
      <Diary />
    </nav>
  );
}

export default SideNav;
