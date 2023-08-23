import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import AboutImage from "../../assets/icons/about.svg";

import "./MainHeader.css";

const MainHeader = () => {
  const [fillColor, setFillColor] = useState(getComputedStyle(document.documentElement).getPropertyValue('--clr-main'));

  useEffect(() => {
    const currentUrl = window.location.href;
    const isAboutPage = currentUrl.includes("About");

    if (isAboutPage) {
      setFillColor(getComputedStyle(document.documentElement).getPropertyValue('--clr-secondary'));
    }
  }, []);

  return (
    <header className="main-header">
      <div className="logo-container">
        <a href="/">
          <img
            className="logo"
            src="src/assets/icons/sonel-logo.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="about-container">
        <Link to="/About">
          <ReactSVG
            className="about"
            src={AboutImage}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", fillColor);
            }}
          />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
