import Gallery from "../GALLERY/Gallery";

// Component to display all hand drawn work
function HandDrawnWork() {
  // Get all images from assets folder - only gather images with DRAWN in the name
  const gallery = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("DRAWN"));

  return (
    <Gallery dataType="image" media={gallery} hasOutline={false}/>
  );
}
// End of HandDrawnWork component

export default HandDrawnWork;
