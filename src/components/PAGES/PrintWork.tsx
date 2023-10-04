import ImageGallery from "../GALLERY/ImageGallery";

function PrintWork() {
  const gallery = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("PRINT"));

  return (
    <ImageGallery images={gallery} hasOutline={true} />
  );
}

export default PrintWork;
