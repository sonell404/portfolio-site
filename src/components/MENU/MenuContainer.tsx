import { useEffect, useRef, useState } from "react";

import MenuBackground from "./MenuBackground";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuButtonContainer from "./MenuButtonContainer";

import "./MenuContainer.css";

// MenuContainerProps interface
interface MenuContainerProps {
  menuOpen?: boolean;
  children?: React.ReactNode;
}

// MenuContainer component
const MenuContainer: React.FC<MenuContainerProps> = ({ menuOpen }) => {
  // Settings for border radius of menu button container
  const withBorderRadius = "0 0 1.8rem 1.8rem";

  // State for menu open
  const [isMenuOpen, setIsMenuOpen] = useState(menuOpen || false);
  // State for border radius
  const [borderRadius, setBorderRadius] = useState(withBorderRadius);
  // Ref for menu button
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Effect for menu open - toggle class name "open" on menu
  useEffect(() => {
    const menu = document.querySelector(".menu");
    if (menu) {
      menu.classList.toggle("open", isMenuOpen);
    }
  }, [isMenuOpen]);

  // Handle menu click
  const handleMenuClick = () => {
    // Toggle menu open state
    setIsMenuOpen(!isMenuOpen);
    // Toggle border radius
    setBorderRadius(borderRadius === withBorderRadius ? "0" : withBorderRadius);
    // Click menu button
    if (menuButtonRef.current) {
      menuButtonRef.current.click();
    }
  };

  return (
    <>
      <MenuBackground />
      <div
        className={`menu-container ${isMenuOpen ? "active" : ""}`}
        aria-expanded={isMenuOpen}
      >
        <MenuButtonContainer style={{ borderRadius }}>
          <MenuButton onClick={handleMenuClick} ref={menuButtonRef} />
        </MenuButtonContainer>
        <Menu className="menu" isOpen={isMenuOpen} />
      </div>
    </>
  );
};
// End of MenuContainer component

export default MenuContainer;
