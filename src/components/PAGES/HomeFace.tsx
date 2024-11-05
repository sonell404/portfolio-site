import "./HomeFace.css";

import HomeFaceSVG from "../../assets/icons/character-face.svg";

// Footer component - renders the children passed in as props
const HomeFace: React.FC = () => {
  return (
    <div className="home-face-image">
        <img src={HomeFaceSVG} alt="" />
    </div>
  );
}; // end of Footer component

export default HomeFace;
