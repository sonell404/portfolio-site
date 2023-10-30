import Gallery from "../GALLERY/Gallery";

function PrintWork() {
  const gallery = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("PRINT"));

  return (
    <Gallery dataType="image" media={gallery} hasOutline={true} />
  );
}

export default PrintWork;
