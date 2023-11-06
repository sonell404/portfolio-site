import { useState } from "react";

import Viewer from "./Viewer";
import VideoItem from "../VIDEO/VideoItem";
import { ProjectData } from "../PAGES/CodeWork";

import "./ImageGallery.css";
import "./VideoGallery.css";

// Interface for the Gallery component - defines the data type of the props
interface GalleryProps {
  // Video or image data type
  dataType: string;
  // Array of urls or ProjectData objects
  media: string[] | ProjectData[];
  // Boolean to determine if the image should have an outline
  hasOutline?: boolean;
  // className for the image gallery
  className?: string;
}

const Gallery = ({ dataType, media, hasOutline, className }: GalleryProps) => {
  // State for the Viewer component
  const [ViewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  // State for the current inde being viewed
  const [index, setIndex] = useState<number>(0);

  // Function to handle the click event on an image
  const handleMediaClick = (index: number) => {
    // Open the viewer
    setViewerIsOpen(true);
    // Set the current index of item being viewed
    setIndex(index);
  };

  // Function to handle the click event on the viewer
  const handleViewerIsOpen = (isOpen: boolean) => {
    setViewerIsOpen(isOpen);
  };

  // Conditional rendering of the gallery
  const currentGallery =
  // Determine if it is a video gallery or image gallery. 
  // If it is video, make sure the media is an object and not a string
    dataType === "video" && typeof media === "object" ? (
      <>
        <div className="video-gallery-container">
          <div className="video-gallery">
            {/* Map through given projects and render them with the VideoItem component */}
            {media.map((project, index) => {
              if (typeof project !== "string") {
                return (
                  <VideoItem key={index} project={project.url} index={index} onClick={() => handleMediaClick(index)} />
                );
              }
            })}
          </div>
        </div>
        {/* Show viewer if ViewerIsOpen has been set to true */}
        {ViewerIsOpen && (
          <Viewer
            dataType={dataType}
            singleMedia={media[index] as ProjectData}
            index={index}
            isOpen={handleViewerIsOpen}
          />
        )}
      </>
    ) : (
      <>
        <div className="image-gallery-container">
          <div className={`image-gallery ${className}`}>
            {/* Map through given projects and render them with img tags */}
            {media.map((image, index) => {
              return (
                <img
                  key={index}
                  className={
                    hasOutline
                      ? "image-gallery__image_outline"
                      : "image-gallery__image"
                  }
                  src={image as string}
                  alt={`image-${index}`}
                  onClick={() => handleMediaClick(index)}
                />
              );
            })}
          </div>
        </div>
        {ViewerIsOpen && (
          <Viewer
            media={media as string[]}
            index={index}
            isOpen={handleViewerIsOpen}
          />
        )}
      </>
    );

  return currentGallery;
};
// end of Gallery component

export default Gallery;
