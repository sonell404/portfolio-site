import React from "react";

import "./Menu.css";

interface MenuButtonContainerProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const MenuButtonContainer: React.FC<MenuButtonContainerProps> = ({className, children, style}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default MenuButtonContainer;
