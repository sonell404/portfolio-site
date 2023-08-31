import { useRef, useState, useEffect } from "react";

import "./ImageGallery.css";
import ImageViewer from "./ImageViewer";

interface ImageGalleryProps {
  images: string[];
  hasOutline?: boolean;
  className?: string;
}

const ImageGallery = ({ images, hasOutline, className }: ImageGalleryProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState<boolean>(false);
  const imageViewerRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (index: number) => {
    setImageIndex(index);
    setIsImageViewerOpen(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      imageViewerRef.current &&
      !imageViewerRef.current.contains(event.target as Node)
    ) {
      setIsImageViewerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
      {isImageViewerOpen && (
        <div ref={imageViewerRef}>
          <ImageViewer
            images={images}
            index={imageIndex}
            className="image-viewer__active"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
