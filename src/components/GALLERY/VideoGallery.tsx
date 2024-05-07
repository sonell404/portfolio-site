import Widget from "../VIDEO/WIDGET/Widget";

import { ProjectData } from "../PAGES/CodeWork";

import "./VideoGallery.css";

// VideoGalleryProps interface - projects is an array of objects of type ProjectData (type defined in CodeWork page)
interface VideoGalleryProps {
  projects: ProjectData[];
}

// VideoGallery component - Maps through the projects array and renders the Widget and video for each project
const VideoGallery = ({ projects }: VideoGalleryProps) => {
  console.log(projects[0].link + " is the test");
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
                link={project.link ? project.link : "nono"}
              />
              <video src={project.url} controls={false} muted loop autoPlay />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
// end of VideoGallery component

export default VideoGallery;
