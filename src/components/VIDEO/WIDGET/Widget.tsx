import React, { useState } from "react";
import "./Widget.css";

interface WidgetProps {
  title: string;
  tech: string;
  description: string;
}

function Widget({ title, tech, description }: WidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWidgetClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      // className={`widget-container ${isOpen ? "open" : ""}`}
      className="widget-container"
      onClick={handleWidgetClick}
    >
      <div className="widget-content">
        <h2 className="widget-title">{title}</h2>
        <h3 className="widget-tech">-{" "}{tech}{" "}-</h3>
        <p className="widget-description">{description}</p>
      </div>
    </div>
  );
}

export default Widget;
