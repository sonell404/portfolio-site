import React, { useState } from "react";
import MainHeader from "./MainHeader";
import "./HeaderContainer.css";
import MenuButtonContainer from "../MENU/MenuButtonContainer";
import MenuButton from "../MENU/MenuButton";
import Menu from "../MENU/Menu";

const HeaderContainer: React.FC = () => {
  const withBorderRadius = "0 0 1.8rem 1.8rem";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [borderRadius, setBorderRadius] = useState(withBorderRadius);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setBorderRadius(borderRadius === withBorderRadius ? "0" : withBorderRadius);
  };

  return (
    <div className="header-container">
      <MainHeader />
      <MenuButtonContainer
        className="menu-button-container"
        style={{ borderRadius }}
      >
        <MenuButton className="menu-button" onClick={handleMenuClick} />
      </MenuButtonContainer>
      <Menu className="menu" isOpen={isMenuOpen} />
    </div>
  );
};

export default HeaderContainer;
