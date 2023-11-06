import "./VideoItem.css";

// VideoItemProps interface
interface VideoItemProps {
  project: string;
  index: number;
  onClick?: () => void;
}

// VideoItem component
function VideoItem({ project, index, onClick }: VideoItemProps) {
  return (
    <div key={index} className="video-item-container">
      <video src={project} controls={false} muted loop autoPlay onClick={onClick} />
    </div>
  );
}
// End of VideoItem component

export default VideoItem;
