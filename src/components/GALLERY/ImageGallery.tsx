import { useState } from "react";

import "./ImageGallery.css";
import ImageViewer from "./ImageViewer";

interface ImageGalleryProps {
  images: string[];
  hasOutline?: boolean;
  className?: string;
}

const ImageGallery = ({ images, hasOutline, className }: ImageGalleryProps) => {
  const [imageViewerIsOpen, setImageViewerIsOpen] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setImageViewerIsOpen(true);
    setImageIndex(index);
  };

  const handleImageViewerIsOpen = (isOpen: boolean) => {
    setImageViewerIsOpen(isOpen);
  };

  return (
    <>
      <div className="image-gallery-container">
        <div className={`image-gallery ${className}`}>
          {images.map((image, index) => (
            <img
              key={index}
              className={
                hasOutline
                  ? "image-gallery__image_outline"
                  : "image-gallery__image"
              }
              src={image}
              alt={`image-${index}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      {imageViewerIsOpen && <ImageViewer images={images} index={imageIndex} isOpen={handleImageViewerIsOpen} />}
    </>
  );
};

export default ImageGallery;
