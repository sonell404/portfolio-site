import { useState } from "react";

import "./ImageViewer.css";
import { useLocation } from "react-router-dom";

interface ImageViewerProps {
  images: string[];
  index: number;
  className?: string;
  isOpen?: ((isOpen: boolean) => void) | undefined;
}

const ImageViewer = ({ images, index, isOpen }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const currentLocation = useLocation().pathname;

  const handleImageViewerClose = () => {
    if (isOpen) {
      isOpen(false);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
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
          {images.map((image, i) => (
            <div
              className={`${
                i === currentIndex
                  ? "image-viewer__image_active"
                  : "image-viewer__image_hidden"
              }`}
              key={i}
            >
              <img src={image} alt={`image-${i}`} />
            </div>
          ))}
        </div>
      </div>
      <div className={
          currentLocation === "/hand-drawn-work"
            ? "image-viewer__controls"
            : "image-viewer__controls-light"
        }>
        <button className="previous" onClick={handlePrevious}>
          <div className="circle"></div>
        </button>
        <button className="next" onClick={handleNext}>
          <div className="circle"></div>
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
