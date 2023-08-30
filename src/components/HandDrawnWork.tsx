import ImageGallery from "./GALLERY/ImageGallery";

function HandDrawnWork() {
  const gallery = Object.values(
    import.meta.glob("../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("DRAWN"));

  return (
    <ImageGallery images={gallery} hasOutline={false}/>
  );
}

export default HandDrawnWork;
