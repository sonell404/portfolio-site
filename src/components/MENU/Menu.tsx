import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Link, useLocation } from "react-router-dom";

import HandDrawnIcon from "../../assets/icons/hand-drawn-icon.svg";
import PrintIcon from "../../assets/icons/print-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import GithubIcon from "../../assets/icons/github-icon.svg";
import MailIcon from "../../assets/icons/mail-icon.svg";
import CodeIcon from "../../assets/icons/code-icon.svg";

import "./Menu.css";

interface MenuProps {
  className?: string;
  isOpen?: boolean;
}

const Menu: React.FC<MenuProps> = ({ className, isOpen }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [hoveredItem, setHoveredItemState] = useState("");
  const [hasText, setHasText] = useState(false);

  const setHoveredItem = (text: string) => {
    setHoveredItemState(text);
  };
  return (
    <>
      <div
        className={`${className} ${isOpen ? "open" : ""}`}
        onMouseEnter={() => setHasText(true)}
        onMouseLeave={() => setHasText(false)}
      >
        <div>
          <ul>
            <li
              className={currentUrl.includes("hand-drawn-work") ? "active" : ""}
              onMouseEnter={() => setHoveredItem("HAND DRAWN")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="/hand-drawn-work">
                <ReactSVG
                  className={
                    currentUrl.includes("hand-drawn-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={HandDrawnIcon}
                />
              </Link>
            </li>
            <li
              className={currentUrl.includes("print-work") ? "active" : ""}
              onMouseEnter={() => setHoveredItem("PRINT")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="/print-work">
                <ReactSVG
                  className={
                    currentUrl.includes("print-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={PrintIcon}
                />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("CODE")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="/code-work">
                <ReactSVG
                  className={
                    currentUrl.includes("code-work")
                      ? "menu-item__active"
                      : "menu-item"
                  }
                  src={CodeIcon}
                />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("GITHUB")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="https://github.com/sonell404" target="_blank">
                <ReactSVG className="menu-item" src={GithubIcon} />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("INSTAGRAM")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="https://www.instagram.com/son__l/" target="_blank">
                <ReactSVG className="menu-item" src={InstagramIcon} />
              </Link>
            </li>
            <li
              onMouseEnter={() => setHoveredItem("MAIL")}
              onMouseLeave={() => setHoveredItem("")}
            >
              <Link to="/print-work">
                <ReactSVG className="menu-item" src={MailIcon} />
              </Link>
            </li>
          </ul>
        </div>
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
