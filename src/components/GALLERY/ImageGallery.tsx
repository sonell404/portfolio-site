import "./ImageGallery.css";

interface ImageGalleryProps {
  images: string[];
  hasOutline?: boolean;
}

const ImageGallery = ({ images, hasOutline }: ImageGalleryProps) => {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            className={hasOutline ? "image-gallery__image_outline" : "image-gallery__image"}
            src={image}
            alt={`image-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
