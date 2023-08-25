import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

import HandDrawnIcon from "../../assets/icons/hand-drawn-icon.svg";
import PrintIcon from "../../assets/icons/print-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";
import MailIcon from "../../assets/icons/mail-icon.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";

interface MenuProps {
  isOpen: boolean;
  className?: string;
}

const Menu: React.FC<MenuProps> = ({ isOpen, className }) => {
  const [hoveredItem, setHoveredItemState] = useState("");
  const [hasText, setHasText] = useState(false);

  const setHoveredItem = (text: string) => {
    setHoveredItemState(text);
  };
  return (
    <>
      <div
        className={className}
        style={{ display: isOpen ? "block" : "none" }}
        onMouseEnter={() => setHasText(true)}
        onMouseLeave={() => setHasText(false)}
      >
        <ul>
          <li>
            <Link
              to="/hand-drawn-work"
              onMouseEnter={() => setHoveredItem("HAND DRAWN")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={HandDrawnIcon} />
            </Link>
          </li>
          <li>
            <Link
              to="/print-work"
              onMouseEnter={() => setHoveredItem("PRINT")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={PrintIcon} />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/son__l/"
              target="_blank"
              onMouseEnter={() => setHoveredItem("INSTAGRAM")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={InstagramIcon} />
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/sonell404"
              target="_blank"
              onMouseEnter={() => setHoveredItem("GITHUB")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={GithubIcon} />
            </Link>
          </li>
          <li>
            <Link
              to="/print-work"
              onMouseEnter={() => setHoveredItem("MAIL")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={MailIcon} />
            </Link>
          </li>
          <li>
            <Link
              to="/print-work"
              onMouseEnter={() => setHoveredItem("PHONE")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <ReactSVG className="menu-item" src={PhoneIcon} />
            </Link>
          </li>
        </ul>
        <div
          className="menu-footer"
          style={{ backgroundColor: hasText ? "transparent" : "white" }}
        >
          <p>{hoveredItem}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
