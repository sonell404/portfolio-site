import React, { useState } from "react";

interface MenuButtonProps {
  onClick?: () => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement> | null | undefined;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, className }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    onClick && onClick();
  };

  return (
    <>
      <button className={`${className} ${isRotated ? "rotate" : ""}`} onClick={handleClick}>
        <img
          src="src/assets/icons/menu-button.svg"
          alt="menu"
        />
      </button>
    </>
  );
};

export default MenuButton;
