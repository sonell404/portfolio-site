import Widget from "../WIDGET/Widget";

import "./VideoGallery.css";

type ProjectData = {
  title: string;
  tech: string;
  description: string;
  url: string;
};

interface VideoGalleryProps {
  projects: ProjectData[];
}

const VideoGallery = ({ projects }: VideoGalleryProps) => {
  return (
    <>
      <div className="video-gallery-container">
        <div className="video-gallery">
          {projects.map((project, index) => (
            <div key={index} className="video-item-container">
              <Widget
                title={project.title}
                tech={project.tech}
                description={project.description}
              />
              <video src={project.url} controls={false} muted loop autoPlay />
            </div>
          ))}
        </div>
      </div>
      {/* {imageViewerIsOpen && (
        <ImageViewer
          images={images}
          index={imageIndex}
          isOpen={handleImageViewerIsOpen}
        />
      )} */}
    </>
  );
};

export default VideoGallery;
