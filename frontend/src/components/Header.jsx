import React from "react";
import { MoonSvg } from "../svgComponents/MoonSvg";
import { SunSvg } from "../svgComponents/SunSvg";

const Header = ({handleToggle}) => {
  return (
    <header>
      <h1 className="logo">Charstorage</h1>
      <div className="theme-change-ui">
        <MoonSvg size={24} color="#1f232a" />
        <div className="theme-change">
          <input id="theme-change-btn" type="checkbox" onChange={handleToggle} />
          <label htmlFor="theme-change-btn" />
        </div>
        <SunSvg size={24} color="#f4f4f4"/>
      </div>
    </header>
  );
};

export default Header;