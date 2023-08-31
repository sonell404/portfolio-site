import { useState } from "react";

import "./ImageViewer.css";

interface ImageViewerProps {
  images: string[];
  index: number;
  className?: string;
}

const ImageViewer = ({ images, index, className }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

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
    <div className={className}>
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
            <div className="image-viewer__controls">
              <button className="previous" onClick={handlePrevious}><div className="circle"></div></button>
              <button className="next" onClick={handleNext}><div className="circle"></div></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
