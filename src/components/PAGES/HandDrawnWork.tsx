import Gallery from "../GALLERY/Gallery";

function HandDrawnWork() {
  const gallery = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    })
  ).filter((url) => url.includes("DRAWN"));

  console.log(gallery[0]);

  return (
    <Gallery dataType="image" media={gallery} hasOutline={false}/>
  );
}

export default HandDrawnWork;
