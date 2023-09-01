import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useState } from "react";

import AboutImage from "../../assets/icons/about.svg";

import "./Footer.css";

function Footer() {
  const [showAbout, setShowAbout] = useState(true);
  const [fillColour, setFillColour] = useState("#212121");

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setFillColour(fillColour === "#212121" ? "#ffffff" : "#212121");
  };

  return (
    <footer className="footer-container">
      <div className="footer-about-container">
        <Link to={showAbout ? "/About" : ""} onClick={handleAboutClick}>
          <ReactSVG
            className="about-footer"
            src={AboutImage}
            style={{ fill: fillColour }}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
