import HeaderContainer from "./HEADER/HeaderContainer";
import ImageGallery from "./GALLERY/ImageGallery";

function HandDrawnWork() {

  const imageList = import.meta.glob('../assets/images/*.png');

  // Convert imageList to string array
  const imageListString = Object.keys(imageList).map((key) => {
    return imageList[key].toString();
  });

  

  //Create array of image URLs
  // const images = [
  //   "src/assets/images/DRAWN-1.png",
  //   "src/assets/images/DRAWN-2.png",
  //   "src/assets/images/DRAWN-3.png",
  //   "src/assets/images/DRAWN-4.png",
  //   "src/assets/images/DRAWN-5.png"
  // ];

  return (
    <>
      <HeaderContainer menuOpen={true} />
      <ImageGallery images={imageListString} />
    </>
  );
}

export default HandDrawnWork;
