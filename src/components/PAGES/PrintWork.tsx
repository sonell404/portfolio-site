import Gallery from "../GALLERY/Gallery";

// Component to display all print work
function PrintWork() {
  const gallery = Object.values(
    // Get all images from assets folder - only gather images with PRINT in the name
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("PRINT"));

  return (
    <Gallery dataType="image" media={gallery} hasOutline={true} />
  );
}
// End of PrintWork component

export default PrintWork;
