import { useState } from "react";
import "./Widget.css";

// WidgetProps interface
interface WidgetProps {
  title: string;
  tech: string;
  description: string;
}

function Widget({ title, tech, description }: WidgetProps) {
  // State for open
  const [isOpen, setIsOpen] = useState(false);

  // Handle widget click
  const handleWidgetClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="widget-container"
      onClick={handleWidgetClick}
      role="dialog"
      tabIndex={0}
      aria-label="Widget Container"
    >
      <div className="widget-content">
        <h2 className="widget-title" aria-level={2}>
          {title}
        </h2>
        <h3 className="widget-tech">- {tech} -</h3>
        <p className="widget-description">{description}</p>
      </div>
    </div>
  );
}
// End of Widget component

export default Widget;
