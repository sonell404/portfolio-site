import "./VideoItem.css";

interface VideoItemProps {
  project: string;
  index: number;
  onClick?: () => void;
}

function VideoItem({ project, index, onClick }: VideoItemProps) {
  return (
    <div key={index} className="video-item-container">
      <video src={project} controls={false} muted loop autoPlay onClick={onClick} />
    </div>
  );
}

export default VideoItem;
