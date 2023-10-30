import { useState } from "react";

import Viewer from "./Viewer";
import VideoItem from "../VIDEO/VideoItem";
import { ProjectData } from "../PAGES/CodeWork";

import "./ImageGallery.css";
import "./VideoGallery.css";

interface GalleryProps {
  dataType: string;
  media: string[] | ProjectData[];
  hasOutline?: boolean;
  className?: string;
}

const Gallery = ({ dataType, media, hasOutline, className }: GalleryProps) => {
  const [ViewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const handleMediaClick = (index: number) => {
    setViewerIsOpen(true);
    setIndex(index);
  };

  const handleViewerIsOpen = (isOpen: boolean) => {
    setViewerIsOpen(isOpen);
  };

  const currentGallery =
    dataType === "video" && typeof media === "object" ? (
      <>
        <div className="video-gallery-container">
          <div className="video-gallery">
            {media.map((project, index) => {
              if (typeof project !== "string") {
                return (
                  <VideoItem key={index} project={project.url} index={index} onClick={() => handleMediaClick(index)} />
                );
              }
            })}
          </div>
        </div>
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

export default Gallery;
