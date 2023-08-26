import HeaderContainer from "./HEADER/HeaderContainer";
import ImageGallery from "./GALLERY/ImageGallery";

function HandDrawnWork() {
//   async function fetchPngFileUrls(): Promise<string[]> {
//     const response = await fetch("../assets/images/");
//     const data = await response.json();

//     // Filter the response to include only PNG file URLs
//     const imageList = data.filter((url: string) => url.endsWith(".png")) as string[];

//     return imageList;
//   }


// const images = await fetchPngFileUrls();
  //Create array of image URLs
  // const images = [
  //   "src/assets/images/DRAWN-1.png",
  //   "src/assets/images/DRAWN-2.png",
  //   "src/assets/images/DRAWN-3.png",
  //   "src/assets/images/DRAWN-4.png",
  //   "src/assets/images/DRAWN-5.png"
  // ];

  const images = import.meta.globEager("../assets/images/*.png");
  //convert Record<string, unknown> to string[]
  const imageList = Object.values(images) as string[];

  return (
    <>
      <HeaderContainer menuOpen={true} />
      <ImageGallery images={imageList} />
    </>
  );
}

export default HandDrawnWork;
