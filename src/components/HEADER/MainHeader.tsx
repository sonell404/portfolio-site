import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import AboutImage from "../../assets/icons/about.svg";

import "./MainHeader.css";

const MainHeader = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [fillColour, setFillColour] = useState("#212121");

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setFillColour(fillColour === "#212121" ? "#ffffff" : "#212121");
  };

  // Set fill colour of about logo to #212121 when the user leaves the page
  useEffect(() => {
    return () => {
      setFillColour("#212121");
    };
  } ,[]);

  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/">
          <img
            className="logo"
            src="src/assets/icons/sonel-logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="about-container">
        <Link to={showAbout ? "/About" : ""} onClick={handleAboutClick}>
          <ReactSVG
            className="about"
            src={AboutImage}
            style={{ fill: fillColour }}
          />
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
