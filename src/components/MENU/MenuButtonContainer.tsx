import React from "react";

import "./MenuButtonContainer.css";

interface MenuButtonContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const MenuButtonContainer: React.FC<MenuButtonContainerProps> = ({className, children, style}) => {
  return (
    <div className={`${className ? className : "button-container"}`} style={style}>
      {children}
    </div>
  );
};

export default MenuButtonContainer;
