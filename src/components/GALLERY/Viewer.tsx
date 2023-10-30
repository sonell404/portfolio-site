import { useState } from "react";
import { useLocation } from "react-router-dom";

import { ProjectData } from "../PAGES/CodeWork";

import "./Viewer.css";
import Widget from "../VIDEO/WIDGET/Widget";

interface ViewerProps {
  dataType?: string;
  media?: string[];
  singleMedia?: ProjectData;
  index: number;
  className?: string;
  isOpen?: ((isOpen: boolean) => void) | undefined;
}

const Viewer = ({
  dataType,
  media,
  singleMedia,
  index,
  isOpen,
}: ViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const currentLocation = useLocation().pathname;

  const handleImageViewerClose = () => {
    if (isOpen) {
      isOpen(false);
    }
  };

  const handleNext = () => {
    if (typeof media !== "undefined") {
      setCurrentIndex((prevIndex) =>
        prevIndex === media.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevious = () => {
    if (typeof media !== "undefined") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? media.length - 1 : prevIndex - 1
      );
    }
  };

  const currentViewer =
    dataType === "video" ? (
      <div className="image-viewer-container">
        <div className="image-backdrop" onClick={handleImageViewerClose}>
          <div className="image-viewer">
            <div className="image-viewer__image_active">
              {typeof singleMedia === "object" ? (
                <Widget
                  title={singleMedia.title}
                  tech={singleMedia.tech}
                  description={singleMedia.description}
                />
              ) : (
                <div>Oops!</div>
              )}
              {/* <img
                  src={typeof image === "string" ? image : image.url}
                  alt={`image-${i}`}
                /> */}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="image-viewer-container">
        <div
          className={
            currentLocation === "/hand-drawn-work"
              ? "image-backdrop"
              : "image-backdrop-light"
          }
          onClick={handleImageViewerClose}
        >
          <div className="image-viewer">
            {typeof media === "object" && media.map((image, i) => (
              <div
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
          <button className="previous" onClick={handlePrevious}>
            <div className="circle"></div>
          </button>
          <button className="next" onClick={handleNext}>
            <div className="circle"></div>
          </button>
        </div>
      </div>
    );

  return currentViewer;
};

export default Viewer;
