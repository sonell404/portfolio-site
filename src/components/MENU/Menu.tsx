import React from "react";
import { Link, useLocation } from "react-router-dom";

// Import icons for menu
import HandDrawnIcon from "../../assets/icons/hand-drawn-icon.svg";
import PrintIcon from "../../assets/icons/print-icon.svg";

import "./Menu.css";

// MenuProps interface
interface MenuProps {
  className?: string;
  isOpen?: boolean;
}

// Menu component
const Menu: React.FC<MenuProps> = ({ className, isOpen }) => {
  // Get current url
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      {/* Menu container */}
      <div
        className={`${className} ${isOpen ? "open" : ""}`}
        role="menu"
        aria-label="Main Menu"
      >
        {/* Menu */}
        <ul className="menu-list">
          {/* Menu items */}
          <li
            className={currentUrl.includes("hand-drawn-work") ? "active" : ""}
            role="menuitem"
            aria-label="Hand Drawn Work"
          >
            <Link to="/hand-drawn-work">
              <img
                id="hand-drawn-work"
                className={
                  currentUrl.includes("hand-drawn-work")
                    ? "menu-item__active"
                    : "menu-item"
                }
                src={HandDrawnIcon}
                alt="Hand Drawn Work"
              />
            </Link>
          </li>
          <li
            className={currentUrl.includes("print-work") ? "active" : ""}
            role="menuitem"
            aria-label="Print Work"
          >
            <Link to="/print-work">
              <img
                className={
                  currentUrl.includes("print-work")
                    ? "menu-item__active"
                    : "menu-item"
                }
                src={PrintIcon}
                alt="Print Work"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
// End of Menu component

export default Menu;
