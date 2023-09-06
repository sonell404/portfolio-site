import React, { useState, forwardRef, Ref } from "react";

import "./Menu.css";

interface MenuButtonProps {
  onClick?: () => void;
  className?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const MenuButton: React.ForwardRefRenderFunction<HTMLButtonElement, MenuButtonProps> = (
  { onClick, className },
  ref: Ref<HTMLButtonElement>
) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    onClick && onClick();
  };

  return (
    <>
      <button ref={ref} className={`${className} ${isRotated ? "rotate" : ""}`} onClick={handleClick}>
        <img
          src="src/assets/icons/menu-button.svg"
          alt="menu"
        />
      </button>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(MenuButton);