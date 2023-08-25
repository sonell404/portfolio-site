import "./ImageGallery.css";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            className="image-gallery__image"
            src={image}
            alt={`image-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
