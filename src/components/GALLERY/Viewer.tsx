import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ProjectData } from "../PAGES/CodeWork";
import Widget from "../VIDEO/WIDGET/Widget";

import "./Viewer.css";

// ViewerProps interface - defines the data type of the props
interface ViewerProps {
  // Image or video data type
  dataType?: string;
  // Array of urls for image gallery
  media?: string[];
  // If it is a project, viewer will display a single modal of info and not a gallery
  singleMedia?: ProjectData;
  index: number;
  className?: string;
  isOpen?: ((isOpen: boolean) => void) | undefined;
}

// Viewer component - renders the image or project info in a modal
const Viewer = ({
  dataType,
  media,
  singleMedia,
  index,
  isOpen,
}: ViewerProps) => {
  // State for the current index being viewed
  const [currentIndex, setCurrentIndex] = useState(index);
  // State for the current location
  const currentLocation = useLocation().pathname;

  // Function to handle the click event on the viewer
  const handleImageViewerClose = () => {
    if (isOpen) {
      isOpen(false);
    }
  };

  // Function to handle the click event on the next button
  const handleNext = () => {
    if (typeof media !== "undefined") {
      setCurrentIndex((prevIndex) =>
        prevIndex === media.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  // Function to handle the click event on the previous button
  const handlePrevious = () => {
    if (typeof media !== "undefined") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    }
  };

  // Conditional rendering of the viewer
  const currentViewer =
    dataType === "video" ? (
      <div className="image-viewer-container">
        {/* Viewer Backdrop */}
        <div
          className="image-backdrop"
          onClick={handleImageViewerClose}
          role="dialog"
          aria-modal="true"
          aria-label="Video Viewer Shaded Backdrop"
        >
          <div className="image-viewer">
            <div className="image-viewer__image_active">
              {typeof singleMedia === "object" ? (
                // Widget containing project info taken from given singleMedia object
                <Widget
                  title={singleMedia.title}
                  tech={singleMedia.tech}
                  description={singleMedia.description}
                  link={singleMedia.link}
                />
              ) : (
                <div>Oops!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="image-viewer-container">
        {/* Viewer Backdrop */}
        <div
          className={
            // Conditional rendering of the backdrop color
            currentLocation === "/hand-drawn-work"
              ? "image-backdrop"
              : "image-backdrop-light"
          }
          // Click event to close the viewer
          onClick={handleImageViewerClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Viewer Shaded Backdrop"
        >
          <div className="image-viewer">
            {/* Conditional rendering of the image gallery */}
            {typeof media === "object" &&
              media.map((image, i) => (
                <div
                  // Conditional rendering of the active image
                  className={`${
                    i === currentIndex
                      ? "image-viewer__image_active"
                      : "image-viewer__image_hidden"
                  }`}
                  key={i}
                >
                  <img
                    src={typeof image === "string" ? image : ""}
                    alt={`image-${i}`}
                    role="img"
                    aria-label={`Image ${i + 1}`}
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className={
            currentLocation === "/hand-drawn-work"
              ? "image-viewer__controls"
              : "image-viewer__controls-light"
          }
        >
          {/* Previous and next buttons */}
          <button className="previous" onClick={handlePrevious} aria-label="Previous Image">
            <div className="circle"></div>
          </button>
          <button className="next" onClick={handleNext} aria-label="Next Image">
            <div className="circle"></div>
          </button>
        </div>
      </div>
    );

  return currentViewer;
};
// End of Viewer component

export default Viewer;
