import HeaderContainer from "./HEADER/HeaderContainer";
import ImageGallery from "./GALLERY/ImageGallery";

function HandDrawnWork() {
  // Function to get filenames from folder
  function getFilenamesFromFolder(folderPath: string): string[] {
    const context = require.context(folderPath, false, /\.(png|jpe?g|svg)$/);
    const filenames = context
      .keys()
      .map((key) => key.replace("./", ""))
      .filter((filename) => filename.includes("DRAWN"));
    return filenames;
  }

  // Create array of image URLs
  const images = getFilenamesFromFolder("../assets/images/");

  return (
    <>
      <HeaderContainer />
      <ImageGallery images={images} />
    </>
  );
}

export default HandDrawnWork;
