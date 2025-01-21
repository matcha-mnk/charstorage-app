import React from "react";
import { MoonSvg } from "../svgComponents/MoonSvg";
import { SunSvg } from "../svgComponents/SunSvg";
import { useNavigate } from "react-router-dom";

const Header = ({handleToggle}) => {
  const navigate = useNavigate();
  return (
    <header>
      <button className="top-button" onClick={() => navigate("")}><h1 className="logo">Charstorage</h1></button>
      <div className="theme-change-ui">
      <SunSvg size={24} color="#f4f4f4"/>
        <div className="theme-change">
          <input id="theme-change-btn" type="checkbox" onChange={handleToggle}/>
          <label htmlFor="theme-change-btn" />
        </div>
        <MoonSvg size={24} color="#1f232a" />
      </div>
    </header>
  );
};

export default Header;